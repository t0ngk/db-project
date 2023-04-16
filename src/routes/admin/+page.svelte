<script>
	/** @type {import('./$types').PageData} */
	import Icon from '@iconify/svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { Table } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import AddTableRoom from '../../lib/components/modal/AddTableRoom.svelte';
	import AddTableServices from '../../lib/components/modal/AddTableServices.svelte';
	import ShowdetailTableRoom from '../../lib/components/modal/ShowdetailTableRoom.svelte';

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

	const ShowdetailTableRoomModal = {
		type: 'component',
		component: {
			ref: ShowdetailTableRoom
		}
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

	const mySelectionHandeler = (daataa) => {
		console.log(daataa);
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

			<div class="mt-4 my-3">
				<div class="card p-4 card-hover cursor-pointer shadow-xl w-full">
					<h3>User name</h3>
				</div>
			</div>
		{:else if tabSet === 1}
			<button class="btn variant-filled-secondary float-right my-3"  on:click={openAddTableRoomModal}>Add Room</button>
			<Table source={tableSimple} interactive={true} on:selected={mySelectionHandeler} />
		{:else if tabSet === 2}
			<button class="btn variant-filled-secondary float-right my-3" on:click={openAddTableServicesModal}>Add Room</button>
			<Table source={tableSimpleService} interactive={true} on:selected={mySelectionHandeler}/>
		{/if}
	</svelte:fragment>
</TabGroup>
