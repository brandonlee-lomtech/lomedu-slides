/**
 * Resolves paths for files served from Vite `public/` (copied to dist root).
 * Honors `import.meta.env.BASE_URL` for subpath deployments; leaves http(s) URLs unchanged.
 */
export function publicAssetUrl(path: string): string {
  const trimmed = path.trim();
  if (!trimmed) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  }

  const suffix = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${prefix}${suffix}`;
}
