<script>
	/** @type {import('./$types').PageData} */
	import Icon from '@iconify/svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { Table } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import AddTableRoom from '../../lib/components/modal/AddTableRoom.svelte';
	import AddTableServices from '../../lib/components/modal/AddTableServices.svelte';
	import ShowdetailTableRoom from '../../lib/components/modal/ShowdetailTableRoom.svelte';
	import ShowDetailTableService from '../../lib/components/modal/ShowDetailTableService.svelte';

	const addTableServicesModal = {
		type: 'component',
		component: {
			ref: AddTableServices
		}
	};

	const openAddTableServicesModal = () => {
		modalStore.trigger(addTableServicesModal);
	};

	const addTableRoomModal = {
		type: 'component',
		component: {
			ref: AddTableRoom
		}
	};
	const openAddTableRoomModal = () => {
		modalStore.trigger(addTableRoomModal);
	};

	/** @type {import('./$types').PageData} */
	export let data;

	let tabSet = 0;

	let users = data.user;

	const simpleDataRoom = data.rooms;
	const tableSimple = {
		head: ['id', 'Name', 'Type'],
		body: tableMapperValues(simpleDataRoom, ['Room_ID', 'Room_name', 'Room_type']),
		meta: tableMapperValues(simpleDataRoom, ['Room_ID', 'Room_name', 'Room_type'])
	};

	const simpleDataService = data.services;

	const tableSimpleService = {
		head: ['id', 'Name', 'Type'],
		body: tableMapperValues(simpleDataService, ['Service_ID', 'Service_name', 'Service_type']),
		meta: tableMapperValues(simpleDataService, ['Service_ID', 'Service_name', 'Service_type', 'Service_recuperate'])
	};

	const openShowdetailTableRoomModal = (daataa) => {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: ShowdetailTableRoom,
				props: {
					daataa
				}
			}
		});
	};

	const openShowdetailTableServicesModal = (daataa) => {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: ShowDetailTableService,
				props: {
					daataa
				}
			}
		});
	};

	const mySelectionHandeler = (daataa) => {
		openShowdetailTableRoomModal(daataa);
	};


</script>

<TabGroup class="card p-4 mx-4 my-4">
	<Tab bind:group={tabSet} name="tab1" value={0}>Users</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Rooms</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>Services</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">
					<Icon icon="ic:baseline-search" />
				</div>
				<input type="search" placeholder="Search..." />
				<button class="variant-filled-secondary">Submit</button>
			</div>

			<div class="p-4 flex flex-col gap-4">
				{#each users as user}
					<button on:click={() => {goto(`/admin/user/${user.User_ID}`)}} class="card p-4 card-hover cursor-pointer shadow-xl w-full text-start">
						<h3>{user.User_name}</h3>
					</button>
				{/each}
			</div>
		{:else if tabSet === 1}
			<button class="btn variant-filled-secondary float-right my-3" on:click={openAddTableRoomModal}
				>Add Room</button
			>
			<Table source={tableSimple} interactive={true} on:selected={mySelectionHandeler} />
		{:else if tabSet === 2}
			<button
				class="btn variant-filled-secondary float-right my-3"
				on:click={openAddTableServicesModal}>Add Service</button
			>
			<Table source={tableSimpleService} interactive={true} on:selected={openShowdetailTableServicesModal} />
		{/if}
	</svelte:fragment>
</TabGroup>
