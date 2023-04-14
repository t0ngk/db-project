<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="p-4 h-screen">
    <div class="card p-4 h-full flex flex-col gap-4">
        <h1>Account</h1>
        <hr>
        <div class="flex gap-4 px-10">
            <div class="flex-1">
                <label class="label">
                    Name
                    <input class="input" type="text" placeholder="Name" value="">
                </label>
            </div>
            <div>
                <Avatar width="w-32" cursor="cursor-pointer"></Avatar>
            </div>  
        </div>

    </div>
</div>
