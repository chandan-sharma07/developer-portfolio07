/**
 * Returns a URL to a public asset, correctly prefixed with Vite's base URL.
 * Use this for any src= paths pointing to the /public folder.
 * e.g. assetUrl('/images/profilePicture/MePic.webp')
 */
const BASE = import.meta.env.BASE_URL  // '/portfolios/' in prod, '/' in dev w/ base override

export default function assetUrl(path) {
  // Remove leading slash from path, then join with base
  const stripped = path.startsWith('/') ? path.slice(1) : path
  return BASE.endsWith('/') ? BASE + stripped : BASE + '/' + stripped
}
