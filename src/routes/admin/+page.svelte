<script lang="ts">
	/** @type {import('./$types').PageData} */
	import Icon from "@iconify/svelte";
	export let data;
</script>

<div class="card p-4 mx-4 my-4">
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">
			<Icon icon="ic:baseline-search" />
		</div>
		<input type="search" placeholder="Search..." />
		<button class="variant-filled-secondary">Submit</button>
	</div>

	<div class="mt-4 my-3">
		<div class="card p-4 card-hover cursor-pointer shadow-xl w-full">
			<h3>User name</h3>
		</div>
	</div>
</div>