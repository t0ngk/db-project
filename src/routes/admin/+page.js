export const load = async ({ fetch }) => {
	const user = await fetch('/api/user').then((r) => r.json());
	const rooms = await fetch('/api/room').then((r) => r.json());
	const services = await fetch('/api/service').then((r) => r.json());
	return { user, rooms, services };
};
