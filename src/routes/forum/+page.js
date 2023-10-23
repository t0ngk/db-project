
export const load = (async ({fetch}) => {
    const forums = await fetch('/api/forum').then((r) => r.json());
    console.log(forums);
    return {
        forums
    };
});
