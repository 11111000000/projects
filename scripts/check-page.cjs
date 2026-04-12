#!/usr/bin/env node
const http = require('http');

const BASE_URL = process.argv[2] || 'http://localhost:4321';

const errors = [];
const logs = [];

const fetchPage = (path) => new Promise((resolve, reject) => {
  const url = new URL(path, BASE_URL);
  http.request(url, { method: 'GET' }, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => resolve({ status: res.statusCode, html: data.length }));
  }).on('error', reject).end();
});

const check = async () => {
  try {
    const r = await fetchPage('/report');
    logs.push(`${new Date().toISOString().slice(11,-1)} /report -> ${r.status} (${r.html})`);
    return r.status;
  } catch (e) {
    errors.push(`${new Date().toISOString().slice(11,-1)} ${e.message}`);
    return 0;
  }
};

const main = async () => {
  const loop = process.argv.includes('--loop');
  console.log(`Checking ${BASE_URL}... (Ctrl+C)\n`);
  
  do {
    const s = await check();
    if (errors.length || (loop && s)) {
      console.clear();
      errors.length && console.log(`=== ERRORS (${errors.length}) ===\n${errors.join('\n')}\n`);
      logs.length && console.log(`=== LOGS (${logs.length}) ===\n${logs.slice(-10).join('\n')}`);
    }
    if (loop) await new Promise(r => setTimeout(r, 5000));
  } while (loop && errors.length === 0);
  
  if (!loop) {
    if (errors.length) console.log(`ERR: ${errors.length}\n${errors.join('\n')}`);
    else console.log(`OK: ${logs.join(', ')}`);
  }
  process.exit(errors.length ? 1 : 0);
};

main();