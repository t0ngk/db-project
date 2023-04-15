<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="p-4 h-screen">
    <div class="card p-4 h-full flex flex-col gap-4">
        <h1>Account</h1>
        <hr>
        <div class="flex gap-4 px-10 flex-col">
            <div class="flex-1">
                <label class="label">
                    Name
                    <input class="input" type="text" placeholder="Name" value="">
                </label>
            </div>
            <div class="flex-1">
                <label class="label">
                    Email
                    <input class="input" type="text" placeholder="Email" value="">
                </label>
            </div>
            <div class="flex-1">
                <label class="label">
                    Old Password
                    <input class="input" type="password" placeholder="Old Password" value="">
                </label>
            </div>
            <div class="flex-1">
                <label class="label">
                    New Password
                    <input class="input" type="password" placeholder="New Password" value="">
                </label>
            </div>
            <div class="flex-1">
                <button class="btn variant-filled-primary">
                    Update
                </button>
            </div>
        </div>

    </div>
</div>
