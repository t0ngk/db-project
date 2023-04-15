<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { modalStore } from '@skeletonlabs/skeleton';
	import AddForum from '$lib/components/modal/AddForum.svelte';
	const forums = [
		{
			title: 'Blog Title',
			content: 'Blog Content',
			author: 'Author Name'
		},
		{
			title: 'Blog Title',
			content: 'Blog Content',
			author: 'Author Name'
		},
		{
			title: 'Blog Title',
			content: 'Blog Content',
			author: 'Author Name'
		},
		{
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
			<div class="card card-hover cursor-pointer shadow-xl w-full p-4 flex flex-col gap-4">
				<div class="flex-1 flex justify-between">
					<p>{forum.title}</p>
					<p>Update 10 min ago</p>
				</div>
				<div class="card-footer flex flex-col gap-4">
					<div class="flex gap-4 items-center">
						{forum.author}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
