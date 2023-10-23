export const load = (async ({fetch, parent}) => {
    const {user} = await parent();
    const appointments = await fetch('/api/appointment').then((r) => r.json());
    const pets = await fetch(`/api/user/pet/${user.User_ID}`).then((r) => r.json());
    const services = await fetch('/api/service').then((r) => r.json());
    const rooms = await fetch('/api/room').then((r) => r.json());
    return {
        appointments,
        pets,
        services,
        rooms,
    };
});
