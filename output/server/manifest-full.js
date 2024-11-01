export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","downloads/DRY MC SCRPT - Vocal Sample Pack - 2022.zip","downloads/DRY MC SCRPT - Vocal Sample Pack - 2023.zip","downloads/ILL.I.SAW WET MIX - Vocal Sample Pack - 2022.zip","favicon.ico","favicon.png","fonts/PressStart2P-Regular.woff2","fonts/ShareTechMono-Regular.woff2","fonts/bd_console.woff","fonts/bd_console.woff2","fonts/teko-medium.woff","fonts/teko-medium.woff2","fonts/teko-regular.woff","fonts/teko-regular.woff2","icon-storybook.png","images/dr-bass.svg","images/event-link-icon.svg","images/event-start-time-icon.svg","images/expand-less.svg","images/expand-more.svg","images/logo-static.jpg","images/mc-scrpt-background.png","images/og-image.png","manifest.json","robots.txt","styles.css"]),
	mimeTypes: {".zip":"application/zip",".png":"image/png",".woff2":"font/woff2",".woff":"font/woff",".svg":"image/svg+xml",".jpg":"image/jpeg",".json":"application/json",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.ChuQYYxQ.js","app":"_app/immutable/entry/app.AuGLPf6F.js","imports":["_app/immutable/entry/start.ChuQYYxQ.js","_app/immutable/chunks/entry.xJ_34A5W.js","_app/immutable/chunks/index-client.9nPquHhM.js","_app/immutable/chunks/runtime.BYJ5JQWo.js","_app/immutable/chunks/index.BkD2L7yp.js","_app/immutable/entry/app.AuGLPf6F.js","_app/immutable/chunks/runtime.BYJ5JQWo.js","_app/immutable/chunks/store.D4y_53k9.js","_app/immutable/chunks/disclose-version.CQFg5J4u.js","_app/immutable/chunks/utils.DxcAWsds.js","_app/immutable/chunks/index-client.9nPquHhM.js","_app/immutable/chunks/props.CVfuVXNr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/download",
				pattern: /^\/download\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/event-log",
				pattern: /^\/event-log\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/event-log/_server.ts.js'))
			},
			{
				id: "/impressum",
				pattern: /^\/impressum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
