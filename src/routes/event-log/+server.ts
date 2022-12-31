export const prerender = true;

export function GET(req: any, res: any) {
	res.status = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ message: 'Hello, World!' }));
}
