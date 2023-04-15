<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { modalStore } from '@skeletonlabs/skeleton';
    import InfoPet from '$lib/components/modal/InfoPet.svelte';
	const fakeData = [
		{
			id: 1,
			name: 'Pet name',
			type: 'Dog',
			breed: 'Breed'
		},
        {
            id: 2,
            name: 'Pet name 2',
            type: 'Cat',
            breed: 'Breed 2'
        }
	];

	const openModalPet = (pet) => {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: InfoPet,
				props: {
					pet
				}
			}
		});
	};
</script>

<div class="p-4 flex flex-col gap-4">
	<h1>Pets</h1>
	<div class="flex gap-4">
		{#each fakeData as stillFakeData}
			<button on:click={() => {openModalPet(stillFakeData)}} class="card card-hover cursor-pointer p-4 w-1/4">
				<h2>{stillFakeData.name}</h2>
			</button>
		{/each}
	</div>
</div>
