<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import Landing from '$lib/components/Landing.svelte';
	console.log(data);
</script>

{#if !data.user}
	<Landing />
{:else}
	HOME
{/if}
