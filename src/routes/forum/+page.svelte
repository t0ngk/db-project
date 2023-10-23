<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { modalStore } from '@skeletonlabs/skeleton';
	import AddForum from '$lib/components/modal/AddForum.svelte';
	import { goto } from '$app/navigation';
	import moment from 'moment';
	const forums = data.forums;

	const openAddForumModal = () => {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: AddForum
			}
		});
	};

	const postAt = (date) => {
		return moment(date).fromNow();
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
			<button on:click={() => {goto(`/forum/${forum.Forum_ID}`)}} class="card card-hover cursor-pointer shadow-xl w-full p-4 flex flex-col gap-4">
				<div class="flex-1 flex w-full justify-between">
					<p>{forum.Forum_title}</p>
					<p>Post {postAt(forum.Forum_created)}</p>
				</div>
				<div class="card-footer flex flex-col gap-4">
					<div class="flex gap-4 items-center">
						{forum.User.User_name}
					</div>
				</div>
			</button>
		{/each}
	</div>
</div>
