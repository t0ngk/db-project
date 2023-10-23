/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch }) {
	const user = await fetch('/api/auth').then((r) => r.json());
	return {
		user
	};
}
