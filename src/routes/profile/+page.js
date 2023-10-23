export const load = (async ({ fetch, parent}) => {
    const {user} = await parent();
    const forum = await fetch(`/api/user/${user.User_ID}/forum`);
    const forums = await forum.json();
    
    return {
        forums
    };
});
