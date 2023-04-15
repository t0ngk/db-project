<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex flex-col gap-4 p-4">
    <div class="w-full flex flex-col gap-4">
        <h1>Forum name</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint aperiam, cumque alias reprehenderit voluptatum earum. Voluptas modi, officiis excepturi perferendis reiciendis fuga adipisci voluptate dolor impedit, nisi mollitia accusamus!</h5>
        <hr>
        <div class="flex justify-between w-full">
            <p>
                Post by Username
            </p>
            <p>
                Post at 10:00
            </p>
        </div>
    </div>
    <div class="card p-4 flex flex-col gap-4">
        <h4>Add Comment</h4>
        <textarea class="textarea" rows="1"></textarea>
        <button class="btn variant-filled-primary">Post</button>
    </div>
    <div class="card p-4 flex flex-col gap-4">
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse labore non. Magnam, amet illo? Ea velit ipsa eligendi repellendus, voluptas mollitia eaque veniam voluptate autem deleniti sit minima illo.</h5>
        <hr>
        <div class="flex justify-between w-full">
            <p>
                Post by Username
            </p>
            <p>
                Post at 10:00
            </p>
        </div>
    </div>

</div>
