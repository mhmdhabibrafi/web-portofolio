const configuredBase = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const basePath = configuredBase === '' || configuredBase === '/' ? '' : configuredBase;

export const withBase = (path: string) => {
  if (!path.startsWith('/') || path.startsWith('//') || !basePath) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return path === '/' ? `${basePath}/` : `${basePath}${path}`;
};

export const withoutBase = (pathname: string) => {
  if (!basePath) return pathname;
  if (pathname === basePath || pathname === `${basePath}/`) return '/';
  return pathname.startsWith(`${basePath}/`) ? pathname.slice(basePath.length) : pathname;
};
