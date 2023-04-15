<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import Icon from '@iconify/svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	import AddAppointment from '$lib/components/modal/AddAppointment.svelte';
	import InfoAppointment from '$lib/components/modal/InfoAppointment.svelte';

	const addAppointmentModal = {
		type: 'component',
		component: {
			ref: AddAppointment
		}
	};

	const openAddAppointmentModal = () => {
		modalStore.trigger(addAppointmentModal);
	};

	const openInfoAppointmentModal = (appointment) => {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: InfoAppointment,
				props: {
					appointment
				}
			}
		});
	};

	const appointments = [
		{
			day: '12 Jan 2021',
			time: '12:00 - 13:00',
			name: 'Appointment Name',
			room: 'Room 001',
			pet: 'Pet Name',
			status: 'Pending'
		},
		{
			day: '12 Jan 2021',
			time: '12:00 - 13:00',
			name: 'Appointment Name',
			room: 'Room 001',
			pet: 'Pet Name',
			status: 'Approved'
		},
		{
			day: '12 Jan 2021',
			time: '12:00 - 13:00',
			name: 'Appointment Name',
			room: 'Room 001',
			pet: 'Pet Name',
			status: 'Rejected'
		},
		{
			day: '12 Jan 2021',
			time: '12:00 - 13:00',
			name: 'Appointment Name',
			room: 'Room 001',
			pet: 'Pet Name',
			status: 'Pending'
		}
	];
</script>

<div class="p-4 flex flex-col gap-4">
	<div class="flex justify-between items-center">
		<h1>Appointment</h1>
		<button
			class="btn variant-filled-primary"
			on:click={() => {
				openAddAppointmentModal();
			}}>Request Appointment</button
		>
	</div>
	<div class="flex flex-wrap gap-4">
		{#each appointments as appointment}
			<button on:click={() => {openInfoAppointmentModal(appointment)}} class="card card-hover cursor-pointer p-4 w-1/4 text-start">
				<h2 class="flex gap-2 items-center">
					<span><Icon icon="mdi:calendar" /></span>{appointment.day}
				</h2>
				<h2 class="flex gap-2 items-center">
					<span><Icon icon="mdi:clock" /></span>{appointment.time}
				</h2>
				<h3>{appointment.name}</h3>
				<h3>At {appointment.room}</h3>
				<h4>For {appointment.pet}</h4>
				<div
					class="badge"
					class:variant-filled-success={appointment.status == 'Approved'}
					class:variant-filled-warning={appointment.status == 'Pending'}
					class:variant-filled-error={appointment.status == 'Rejected'}
				>
					{appointment.status}
				</div>
			</button>
		{/each}
	</div>
</div>
