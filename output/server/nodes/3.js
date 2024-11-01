import * as universal from '../entries/pages/download/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/download/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/download/+page.ts";
export const imports = ["_app/immutable/nodes/3.D5tFeAh5.js","_app/immutable/chunks/disclose-version.CQFg5J4u.js","_app/immutable/chunks/runtime.BYJ5JQWo.js","_app/immutable/chunks/attributes.BdeLHjoJ.js","_app/immutable/chunks/utils.DxcAWsds.js"];
export const stylesheets = ["_app/immutable/assets/3.BGf3WwY9.css"];
export const fonts = [];
