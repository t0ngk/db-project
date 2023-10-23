<script>
	/** @type {import('./$types').PageData} */
	export let data;
    import moment from 'moment';
    const forum = data.forum;

    const addComment = async (e) => {
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        console.log(forum)
        const res = await fetch(`/api/forum/${forum.Forum_ID}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const json = await res.json();

        if (res.ok) {
            alert('เพิ่มคอมเม้นสำเร็จ');
            window.location.reload();
        } else {
            alert(json.message);
        }
    };
</script>

<div class="flex flex-col gap-4 p-4">
    <div class="w-full flex flex-col gap-4">
        <h1>{forum.Forum_title}</h1>
        <h5>{forum.Forum_content}</h5>
        <hr>
        <div class="flex justify-between w-full">
            <p>
                Post by {forum.User.User_name}
            </p>
            <p>
                Post at {moment(forum.Forum_created).fromNow()}
            </p>
        </div>
    </div>
    <form on:submit|preventDefault={addComment} class="card p-4 flex flex-col gap-4">
        <h4>Add Comment</h4>
        <textarea name="detail" class="textarea" rows="1"></textarea>
        <button type="submit" class="btn variant-filled-primary">Post</button>
    </form>
    {#each forum.Comment as comment}    
        <div class="card p-4 flex flex-col gap-4">
            <h5>{comment.Comment_detail}</h5>
            <hr>
            <div class="flex justify-between w-full">
                <p>
                    Post by {comment.User.User_name}
                </p>
                <p>
                    Post at {moment(comment.Comment_created).fromNow()}
                </p>
            </div>
        </div>
    {/each}

</div>
