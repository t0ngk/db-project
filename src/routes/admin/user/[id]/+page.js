export const load = (async ({fetch, params}) => {
    const pets = await fetch(`/api/user/pet/${params.id}`).then(r => r.json());
    const appointments = await fetch(`/api/user/appointment/${params.id}`).then(r => r.json());
    const services = await fetch('/api/service').then((r) => r.json());
    const rooms = await fetch('/api/room').then((r) => r.json());
    const thisUser = await fetch(`/api/user/${params.id}`).then(r => r.json());
    console.log(appointments);
    return {
        pets,
        services,
        rooms,
        appointments,
        id: params.id,
        thisUser
    };
});
