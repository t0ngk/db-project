<script>
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	export let pet;
	let tabSet = 0;
	console.log(pet);
</script>

<div class="p-4 flex flex-col gap-4 card">
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>ข้อมูลสัตว์เลี้ยง</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>ข้อมูลสถานะการรักษา</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<section class="px-4 pt-1">
					<div class="flex flex-col gap-y-5">
						<label class="label">
							<span>ชื่อ : </span>
							<input class="input" type="text" value={pet.Pet_name} disabled />
						</label>
						<label class="label">
							<span>สายพันธ์ุ : </span>
							<input class="input" type="text" value={pet.Pet_species} disabled />
						</label>
						<label class="label">
							<span>เพศ : </span>
							<input class="input" type="text" value={pet.Pet_gender} disabled />
						</label>
						<label>
							<span>วันเกิด : </span>
							<input class="input" type="text" value={new Date(pet.Pet_DOB)} disabled />
						</label>
						<!-- <label class="label">
							<span>รายละเอียดเพิ่มเติม : </span>
							<textarea class="textarea" rows="4" placeholder="รายละเอียดเพิ่มเกี่ยวกัยสัตว์" disabled />
						</label> -->
					</div>
				</section>
			{:else if tabSet === 1}
				<section class="px-4 pt-1">
					<div class="flex flex-col gap-y-5">
						<label class="label">
							<span>สถานะการรักษา : </span>
							<input class="input" type="text" value={pet.Case?.State?.State_detail} disabled />
						</label>
						<label class="label">
							<span>วันที่รักษา : </span>
							<input class="input" type="text" value={pet.Case?.Appointment?.Appointment_date} disabled />
						</label>
						<label class="label">
							<span>เวลาที่รักษา : </span>
							<input class="input" type="text" value={pet.Case?.Appointment?.Appointment_time} disabled />
						</label>
						{#if pet.Case?.Appointment?.Room}							
							<label class="label">
								<span>ห้อง : </span>
								<input class="input" type="text" value={pet.Case?.Appointment?.Room?.Room_name} disabled />
							</label>
						{/if}
						<!-- <label class="label">
							<span>รายละเอียดเพิ่มเติม : </span>
							<textarea class="textarea" rows="4" placeholder="รายละเอียดเพิ่มเกี่ยวกัยสัตว์" disabled/>
						</label> -->
					</div>
				</section>
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
