<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { Avatar } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	const logout = async () => {
		const response = await fetch('/api/auth', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const result = await response.json();
		if (response.ok) {
			alert('Logout Success');
			window.location.assign('/login');
		} else {
			alert(result.message);
		}
	}

	const fakeLogout = () => {
		localStorage.removeItem('auth');
		
		window.location.assign('/login');
	}

	const forums = data.forums;
</script>

<div class="p-4">
	<div class="w-full h-full p-10 flex flex-col gap-4">
		<div class="flex justify-between">
			<div class="flex flex-col gap-3">
				<Avatar width="w-32" />
				<h1>{data.user?.User_name}</h1>
				<div class="flex gap-4">
					<div class="badge variant-filled">{data.user?.User_role}</div>
				</div>
			</div>
			<div>
				<button on:click={logout} class="btn variant-filled-error">Log out</button>
				<button on:click={() => {goto(`/profile/edit`)}} class="btn variant-filled-primary">Edit</button>
			</div>
		</div>
		<h1>Forum</h1>
		<div class="flex flex-wrap gap-4">
			{#if forums.length == 0}
			<div class="card p-4 w-full text-center">
				<h2>No forum found</h2>
			</div>
			{/if}
			{#each forums as forum}
				<button on:click={() => {goto(`/forum/${forum.Forum_ID}`)}} class="card card-hover cursor-pointer shadow-xl w-full p-4 flex flex-col gap-4">
					<div class="flex-1 w-full flex justify-between">
						<p>{forum.Forum_title}</p>
						<p>Update 10 min ago</p>
					</div>
					<div class="card-footer flex flex-col gap-4">
						<div class="flex gap-4 items-center">
							{forum.User?.User_name}
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>
