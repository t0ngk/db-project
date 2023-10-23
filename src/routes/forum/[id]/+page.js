export const load = (async ({fetch, params}) => {
    const forum = await fetch(`/api/forum/${params.id}`).then((r) => r.json());
    console.log(forum);
    return {
        forum
    };
});
