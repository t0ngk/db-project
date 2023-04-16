<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { modalStore } from '@skeletonlabs/skeleton';
	import AddForum from '$lib/components/modal/AddForum.svelte';
	import { goto } from '$app/navigation';
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

	const openAddForumModal = () => {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: AddForum
			}
		});
	};
</script>

<div class="p-4 flex flex-col gap-4">
	<div class="flex w-full justify-between">
		<h1>Forum</h1>
		<button
			class="btn variant-filled-primary"
			on:click={() => {
				openAddForumModal();
			}}
		>
			New Forum
		</button>
	</div>
	<div class="flex flex-wrap gap-4">
		{#each forums as forum}
			<button on:click={() => {goto(`/forum/${forum.id}`)}} class="card card-hover cursor-pointer shadow-xl w-full p-4 flex flex-col gap-4">
				<div class="flex-1 flex w-full justify-between">
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
