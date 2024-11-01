import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DCY3Td1P.js","_app/immutable/chunks/disclose-version.CQFg5J4u.js","_app/immutable/chunks/runtime.BYJ5JQWo.js","_app/immutable/chunks/attributes.BdeLHjoJ.js","_app/immutable/chunks/utils.DxcAWsds.js","_app/immutable/chunks/props.CVfuVXNr.js","_app/immutable/chunks/store.D4y_53k9.js","_app/immutable/chunks/index-client.9nPquHhM.js","_app/immutable/chunks/constants.IHrN6EvC.js","_app/immutable/chunks/actions.CHav-PJH.js","_app/immutable/chunks/lifecycle.CLwY8XSq.js","_app/immutable/chunks/index.BkD2L7yp.js","_app/immutable/chunks/i18n-store.TN3aB92y.js"];
export const stylesheets = ["_app/immutable/assets/2.D7wzYrje.css"];
export const fonts = [];
