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

	let tabSet = 0;
	export let data;

	const users = [
		{
			id: 1,
			name: 'User 1'
		},
		{
			id: 2,
			name: 'User 2'
		},
		{
			id: 3,
			name: 'User 3'
		},
		{
			id: 4,
			name: 'User 4'
		}
	];

	const simpleDataRoom = [
		{
			id: 1,
			position: 1,
			name: 'Room 1',
			type: 'ตรวจสุขภาพ'
		},
		{
			id: 2,
			position: 2,
			name: 'Room 2',
			type: 'ตรวจสุขภาพ'
		},
		{
			id: 3,
			position: 3,
			name: 'Room 3',
			type: 'ตรวจสุขภาพ'
		},
		{
			id: 4,
			position: 4,
			name: 'Room 4',
			type: 'ตรวจสุขภาพ'
		}
	];
	const tableSimple = {
		head: ['id', 'Name', 'Type'],
		body: tableMapperValues(simpleDataRoom, ['id', 'name', 'type']),
		meta: tableMapperValues(simpleDataRoom, ['position', 'name', 'type'])
	};

	const simpleDataService = [
		{
			id: 1,
			name: 'Service 1',
			type: 'ตรวจสุขภาพ'
		},
		{
			id: 2,
			name: 'Service 2',
			type: 'ตรวจสุขภาพ'
		},
		{
			id: 3,
			name: 'Service 3',
			type: 'ตรวจสุขภาพ'
		},
		{
			id: 4,
			name: 'Service 4',
			type: 'ตรวจสุขภาพ'
		}
	];

	const tableSimpleService = {
		head: ['id', 'Name', 'Type'],
		body: tableMapperValues(simpleDataService, ['id', 'name', 'type']),
		meta: tableMapperValues(simpleDataService, ['name', 'name', 'type'])
	};

	const mySelectionHandeler = (daataa) => {
		console.log(daataa);
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
					<button on:click={() => {goto(`/admin/user/${user.id}`)}} class="card p-4 card-hover cursor-pointer shadow-xl w-full text-start">
						<h3>User name</h3>
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
				on:click={openAddTableServicesModal}>Add Room</button
			>
			<Table source={tableSimpleService} interactive={true} on:selected={mySelectionHandeler} />
		{/if}
	</svelte:fragment>
</TabGroup>
