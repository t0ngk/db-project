export const load = async ({ parent, fetch }) => {
	const { user } = await parent();
	const pets = await fetch(`/api/user/pet/${user.User_ID}`).then((r) => r.json());
	return {
		pets
	};
};
