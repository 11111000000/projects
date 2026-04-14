export function siteHref(path = '/') {
  const base = import.meta.env.BASE_URL || '/';

  if (!path || path === '/') return base;

  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}
