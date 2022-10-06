// @ts-nocheck
/** @type {import("./$types").PageLoad} */
import { redirect } from "@sveltejs/kit";

// @ts-ignore
export function load({ url }) {
  const params = new URLSearchParams(url.search);
  console.log({ params });
  const gateway = params.get("gateway");
  if (gateway === "download" || gateway === "impressum") throw redirect(302, `/${gateway}`);
  if (gateway === "event-log") throw redirect(302, "/#event-log");
}
