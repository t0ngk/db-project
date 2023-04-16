<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { Avatar } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	const fakeLogout = () => {
		localStorage.removeItem('auth');
		window.location.assign('/login');
	}

	const forums = [
		{
			id: 1,
			title: 'Blog Title',
			content: 'Blog Content',
			author: 'Author Name'
		},
		{
			id: 2,
			title: 'Blog Title',
			content: 'Blog Content',
			author: 'Author Name'
		},
		{
			id: 3,
			title: 'Blog Title',
			content: 'Blog Content',
			author: 'Author Name'
		},
		{
			id: 4,
			title: 'Blog Title',
			content: 'Blog Content',
			author: 'Author Name'
		}
	];
</script>

<div class="p-4">
	<div class="w-full h-full p-10 flex flex-col gap-4">
		<div class="flex justify-between">
			<div class="flex flex-col gap-3">
				<Avatar width="w-32" />
				<h1>Name</h1>
				<div class="flex gap-4">
					<div class="badge variant-filled">Admin</div>
				</div>
			</div>
			<div>
				<button on:click={fakeLogout} class="btn variant-filled-error">Log out</button>
				<button on:click={() => {goto(`/profile/edit`)}} class="btn variant-filled-primary">Edit</button>
			</div>
		</div>
		<h1>Forum</h1>
		<div class="flex flex-wrap gap-4">
			{#each forums as forum}
				<button on:click={() => {goto(`/forum/${forum.id}`)}} class="card card-hover cursor-pointer shadow-xl w-full p-4 flex flex-col gap-4">
					<div class="flex-1 w-full flex justify-between">
						<p>{forum.title}</p>
						<p>Update 10 min ago</p>
					</div>
					<div class="card-footer flex flex-col gap-4">
						<div class="flex gap-4 items-center">
							{forum.author}
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>
