<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import Icon from '@iconify/svelte';

    const appointments = [
        {
            time: '12:00 - 13:00',
            name: 'Appointment Name',
            room: 'Room 001',
            pet: 'Pet Name'
        },
        {
            time: '12:00 - 13:00',
            name: 'Appointment Name',
            room: 'Room 001',
            pet: 'Pet Name'
        },
        {
            time: '12:00 - 13:00',
            name: 'Appointment Name',
            room: 'Room 001',
            pet: 'Pet Name'
        },
        {
            time: '12:00 - 13:00',
            name: 'Appointment Name',
            room: 'Room 001',
            pet: 'Pet Name'
        },
    ]
</script>

<div class="p-4 flex flex-col gap-4">
	<h1>Appointment</h1>
	<div class="flex flex-wrap gap-4">
        {#each appointments as appointment}            
            <div class="card card-hover cursor-pointer p-4 w-1/4">
                <h2 class="flex gap-2 items-center"><span><Icon icon="carbon:calendar" /></span>{appointment.time}</h2>
                <h3>{appointment.name}</h3>
                <h3>At {appointment.room}</h3>
                <h4>For {appointment.pet}</h4>
            </div>
        {/each}
	</div>
</div>
