<script>
	export let appointment;
	console.log(appointment);
	let fakeRole = 'Admin';
</script>

<div class="card p-4">
	<h1>{appointment.name}</h1>
	<hr class="my-5" />
	<div class="card p-4 mb-4">
		<div class="flex flex-col gap-4">
			<h3>ข้อมูลการนัด</h3>
			<hr class="my-1" />
			<label class="label">
				<span>วันที่ทำการนัด : </span>
				<input class="input" type="text" value={appointment.day} disabled />
			</label>
			<label class="label">
				<span>เวลาที่ทำการนัด : </span>
				<input class="input" type="text" value={appointment.time} disabled />
			</label>
			<label class="label">
				<span>ห้อง : </span>
				<input class="input" type="text" value={appointment.room} disabled />
			</label>
			<label class="label">
				<span>ชื่อสัตว์ที่นัด : </span>
				<input class="input" type="text" value={appointment.pet} disabled />
			</label>
			<label class="label">
				<span>สถานะการนัด : </span>
				{#if appointment.status === 'Pending'}
					<input class="input text-warning-500" type="text" value={appointment.status} disabled />
				{:else if appointment.status === 'Rejected'}
					<input class="input text-error-500" type="text" value={appointment.status} disabled />
				{:else}
					<input class="input text-success-500" type="text" value={appointment.status} disabled />
				{/if}
			</label>
		</div>
	</div>

	{#if appointment.status === 'Pending'}
		{#if fakeRole === 'Admin'}
			<button class="btn variant-filled-success">Approve</button>
			<button class="btn variant-filled-error">Reject</button>
		{:else}
			<button class="btn variant-filled-error">Cancel</button>
		{/if}
	{:else if appointment.status === 'Rejected'}
		<button class="btn variant-filled-error">Delete</button>
	{/if}
</div>
