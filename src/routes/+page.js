/** @type {import('./$types').PageLoad} */
export function load({ url }) {
  const params = new URLSearchParams(url.search);
  const gateway = params.get("gateway");
  return {
    gateway
  };
}
