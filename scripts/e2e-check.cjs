#!/usr/bin/env node
const { chromium } = require('playwright');
const fs = require('fs');

const TARGET = process.argv[2] || 'http://localhost:4321/report';
const LOOP = process.argv.includes('--loop');
const CANDIDATE_BROWSER_PATHS = [
  process.env.PLAYWRIGHT_CHROMIUM_PATH,
  process.env.BROWSER_PATH,
  '/run/current-system/sw/bin/chromium-browser',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable'
].filter(Boolean);

let browser, page;
const logs = [];
const errors = [];

const parseConsole = (type, msg) => {
  const ts = new Date().toISOString().slice(11, -1);
  const line = `${ts} [${type}] ${msg}`;
  if (type === 'error') errors.push(line);
  else logs.push(line);
};

const run = async () => {
  const executablePath = CANDIDATE_BROWSER_PATHS.find((candidate) => fs.existsSync(candidate));
  const launchOptions = {
    args: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  };

  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }

  browser = await chromium.launch(launchOptions);
  page = await browser.newPage();

  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    if (text) parseConsole(type, text);
  });

  page.on('pageerror', err => {
    parseConsole('pageerror', err.stack || err.message);
  });

  await page.goto(TARGET, { waitUntil: 'networkidle' });
  
  await page.waitForTimeout(2000);
  
  await browser.close();
};

const format = () => {
  const out = [];
  if (errors.length) {
    out.push(`\n=== ERRORS (${errors.length}) ===`);
    errors.forEach(e => out.push(e));
  }
  if (logs.length) {
    out.push(`\n=== CONSOLE (${logs.length}) ===`);
    logs.slice(-20).forEach(l => out.push(l));
  }
  return out.join('\n');
};

const main = async () => {
  console.log(`E2E check: ${TARGET}`);
  
  if (LOOP) {
    while (true) {
      logs.length = 0;
      errors.length = 0;
      await run();
      console.clear();
      console.log(format() || 'OK');
      await new Promise(r => setTimeout(r, 5000));
    }
  } else {
    await run();
    console.log(format() || `OK: ${TARGET}`);
    process.exit(errors.length ? 1 : 0);
  }
};

main().catch(e => {
  console.error(e.message);
  process.exit(1);
});
