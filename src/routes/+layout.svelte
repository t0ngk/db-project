<script>
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../theme.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import Icon from '@iconify/svelte';
	let storeValue = writable(0);
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<AppRailTile label="Home" value={0}>
				<div class="text-3xl">
					<Icon icon="mdi:home" />
				</div>
			</AppRailTile>
			<AppRailTile label="Appointment" value={1}>
				<div class="text-3xl">
					<Icon icon="mdi:calendar-clock" />
				</div>
			</AppRailTile>
			<AppRailTile label="Pets" value={2}>
				<div class="text-3xl">
					<Icon icon="mdi:paw" />
				</div>
			</AppRailTile>
			<AppRailTile label="News" value={3}>
				<div class="text-3xl">
					<Icon icon="mdi:newspaper-variant-multiple" />
				</div>
			</AppRailTile>
		</AppRail></svelte:fragment
	>
	<slot />
</AppShell>
