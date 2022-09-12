/** @type {import('./$types').PageLoad} */
import { redirect } from "@sveltejs/kit";

// @ts-ignore
export function load({ url }) {
  const params = new URLSearchParams(url.search);
  const gateway = params.get("gateway");
  if (gateway === "download") throw redirect(302, `/${gateway}`);
  if (gateway === "impressum") throw redirect(302, `/${gateway}`);
}
