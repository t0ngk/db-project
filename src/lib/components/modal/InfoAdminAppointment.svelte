<script>
</script>

<div class="card p-4 flex flex-col gap-4 max-h-screen overflow-y-scroll w-3/4">
	<h1>1</h1>
	<hr class="my-5" />
	<div class="card p-4 mb-4">
		<div class="flex flex-col gap-4">
			<h3>ข้อมูลการนัด</h3>
			<hr class="my-1" />
			<label class="label">
				<span>วันที่ทำการนัด : </span>
				<input class="input" type="text" value={''} disabled />
			</label>
			<label class="label">
				<span>เวลาที่ทำการนัด : </span>
				<input class="input" type="text" value={''} disabled />
			</label>
			<label class="label">
				<span>ห้อง : </span>
				<input class="input" type="text" value={''} disabled />
			</label>
			<label class="label">
				<span>ชื่อสัตว์ที่นัด : </span>
				<input class="input" type="text" value={''} disabled />
			</label>
			<label class="label">
				<span>สถานะการนัด : </span>
                <input class="input text-warning-500" type="text" value={''} disabled />
                <!----
				{#if appointment.status === 'Pending'}
					<input class="input text-warning-500" type="text" value={appointment.status} disabled />
				{:else if appointment.status === 'Rejected'}
					<input class="input text-error-500" type="text" value={appointment.status} disabled />
				{:else}
					<input class="input text-success-500" type="text" value={appointment.status} disabled />
				{/if}
                ----->
			</label>
		</div>
	</div>
</div>