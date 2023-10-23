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
			ref: AddAppointment,
			props: {
				pets: data.pets,
				services: data.services,
				rooms: data.rooms
			}
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
					appointment,
					user: data.user
				}
			}
		});
	};
	
	const appointments = data.appointments.map((rawdata) => {
		return {
			id: rawdata.Case?.Appointment?.Appointment_ID,
			day: rawdata.Case?.Appointment?.Appointment_date,
			time: rawdata.Case?.Appointment?.Appointment_time,
			name: rawdata.Case?.Service?.Service_name,
			pet: rawdata.Pet_name,
			status: rawdata.Case?.Appointment?.Appointment_status,
			room: rawdata.Case?.Appointment?.Room?.Room_name
		};
	});
console.log(appointments.length)
</script>

<div class="p-4 flex flex-col gap-4">
	<div class="flex justify-between items-center">
		<h1>Appointment</h1>
		{#if data.user?.User_role == 'User'}
		<button
			class="btn variant-filled-primary"
			on:click={() => {
				openAddAppointmentModal();
			}}>Request Appointment</button
		>
		{/if}
	</div>
	<div class="flex flex-wrap gap-4">
		{#if appointments.length == 0}
		<div class="card p-4 w-full text-center">
			<h2>No appointment found</h2>
		</div>
		{/if}
		{#each appointments as appointment}
			<button
				on:click={() => {
					openInfoAppointmentModal(appointment);
				}}
				class="card card-hover cursor-pointer p-4 w-1/4 text-start"
			>
				<h2 class="flex gap-2 items-center">
					<span><Icon icon="mdi:calendar" /></span>{
						new Date(appointment.day).toLocaleDateString(
							'en-GB',
							{ day: 'numeric', month: 'short', year: 'numeric' }
						)
					}
				</h2>
				<h2 class="flex gap-2 items-center">
					<span><Icon icon="mdi:clock" /></span>{appointment.time}
				</h2>
				<h3>{appointment.name}</h3>
				{#if appointment.room}
					<h3>At {appointment.room}</h3>
				{/if}
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
