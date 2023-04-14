<script>
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../theme.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	const menu = {
		rount: [
			{
				label: 'Appointment',
				href: '/appointment',
				icon: 'mdi:calendar-clock'
			},
			{
				label: 'Pets',
				href: '/pets',
				icon: 'mdi:paw'
			},
			{
				label: 'Forum',
				href: '/forum',
				icon: 'material-symbols:forum'
			}
		],
		tail: [
			{
				label: 'Account',
				href: '/profile',
				icon: 'mdi:account'
			}
		]
	};
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			{#each menu.rount as item}
				<AppRailTile
					label={item.label}
					tag="a"
					class={item.href === $page.url.pathname  ? '!bg-primary-500' : ''}
					value={item.label}
					on:click={() => {
						goto(item.href);
					}}
				>
					<div class="text-3xl">
						<Icon icon={item.icon} />
					</div>
				</AppRailTile>
			{/each}
			<svelte:fragment slot="trail">
				{#each menu.tail as item}
					<AppRailTile
						label={item.label}
						tag="a"
						class={item.href === $page.url.pathname  ? '!bg-primary-500' : ''}
						value={item.label}
						on:click={() => {
							goto(item.href);
						}}
					>
						<div class="text-3xl">
							<Icon icon={item.icon} />
						</div>
					</AppRailTile>
				{/each}
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	<slot />
</AppShell>
