<script>
	import { Stepper, Step, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import autoAnimate from '@formkit/auto-animate';
	import { modalStore } from '@skeletonlabs/skeleton';
	let information = {
		mode: 'old',
		pet_id: 0,
		petname: '',
		petBD: '',
		petSpecies: '',
		petGender: 'เพศเมีย',
		service: 0,
		time: 0,
		room: 0,
		pet_date: 0,
		petType: 0,
		phoneNumber: '',
		pet_start: 1,
		pet_amount: 0
	};

	export let pets;
	export let services;
	export let rooms;
	export let id;

	
	const	getPet = (id) => {
		return pets.find((pet) => pet.Pet_ID == id);
	};
	
	let selectedPet;

	$: selectedPet = getPet(information.pet_id);

	const AddAppointmentData = async () => {
		const req = await fetch(`/api/appointment/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(information)
		});
		const res = await req.json();
		if (req.ok) {
			alert('เพิ่มข้อมูลการนัดหมายสำเร็จ');
			modalStore.close();
			window.location.reload();
		} else {
			alert(res.message);
		}
	};

	let times = [
		{
			time: '08:00 - 09:00',
			status: 'available'
		},
		{
			time: '09:00 - 10:00',
			status: 'available'
		},
		{
			time: '10:00 - 11:00',
			status: 'available'
		},
		{
			time: '11:00 - 12:00',
			status: 'available'
		},
		{
			time: '12:00 - 13:00',
			status: 'available'
		},
		{
			time: '13:00 - 14:00',
			status: 'available'
		},
		{
			time: '14:00 - 15:00',
			status: 'available'
		},
		{
			time: '15:00 - 16:00',
			status: 'available'
		},
		{
			time: '16:00 - 17:00',
			status: 'available'
		},
		{
			time: '17:00 - 18:00',
			status: 'available'
		},
		{
			time: '18:00 - 19:00',
			status: 'available'
		},
		{
			time: '19:00 - 20:00',
			status: 'available'
		}
	];
</script>

<div class="card p-4 w-1/2">
	<Stepper on:complete={AddAppointmentData}>
		<Step>
			<svelte:fragment slot="header">เคยนำสัตว์เลี้ยงมารักษาที่นี่หรือไม่</svelte:fragment>
			<RadioGroup>
				<RadioItem bind:group={information.mode} name="justify" value="old">เคยใช้</RadioItem>
				<RadioItem bind:group={information.mode} name="justify" value="new">ไม่เคย</RadioItem>
			</RadioGroup>
			<div use:autoAnimate>
				{#if information.mode == 'old'}
					<div>
						<span>Pet Name : </span>
						<select class="select" bind:value={information.pet_id}>
							<option value={0}>เลือกสัตว์เลี้ยง</option>
							{#each pets as pet}
								<option value={pet.Pet_ID}>{pet.Pet_name}</option>
							{/each}
						</select>
					</div>
				{:else}
					<form>
						<label class="label">
							<span>Pet Name : </span>
							<input
								class="input"
								type="text"
								placeholder="Pet Name"
								bind:value={information.petname}
							/>
						</label>
						<label class="label">
							<span>Pet Type : </span>
							<select class="select" bind:value={information.petType}>
								<option value={0}>เลือกประเภทสัตว์เลี้ยง</option>
								<option>dog</option>
								<option>cat</option>
							</select>
						</label>
						<label class="label">
							<span>Pet Birthday : </span>
							<input class="input" type="date" bind:value={information.petBD} />
						</label>
						<label class="label">
							<span>Pet Species : </span>
							<input class="input" type="text" bind:value={information.petSpecies} />
						</label>
						<label class="label">
							<span>Pet Gender : </span>
							<div class="flex gap-4">
								<label class="flex items-center space-x-2">
									<input
										class="radio"
										type="radio"
										name="radio-direct"
										value="เพศผู้"
										bind:group={information.petGender}
									/>
									<p>เพศผู้</p>
								</label>
								<label class="flex items-center space-x-2">
									<input
										class="radio"
										type="radio"
										name="radio-direct"
										value="เพศเมีย"
										bind:group={information.petGender}
									/>
									<p>เพศเมีย</p>
								</label>
							</div>
							<label class="label">
								<span>Phone number : </span>
								<input
									class="input"
									type="tel"
									placeholder="Phone number"
									bind:value={information.phoneNumber}
								/>
							</label>
						</label>
					</form>
				{/if}
			</div>
		</Step>
		<Step>
			<svelte:fragment slot="header">เลือกบริการและวันที่ต้องการนัด</svelte:fragment>
			<label class="label">
				<span>Select Service : </span>
				<select class="select" bind:value={information.service}>
					<option value={0}>กรุณาเลือกบริการ</option>
					{#each services as service}
						<option value={service}>{service.Service_name}</option>
					{/each}
				</select>
			</label>

			<label class="label">
				{#if information.service.Service_recuperate == false}
					<span>Select Date : </span>
				{:else}
					<span>วันเริ่มฝากเลี้ยง : </span>
				{/if}
				<input class="input" type="date" bind:value={information.pet_date} />
			</label>

			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label flex flex-col">
				<span>Select Time : </span>
				<select class="select" bind:value={information.time}>
					<option value={0}>กรุณาเลือกเวลา</option>
					{#each times as time}
						<option>{time.time}</option>
					{/each}
				</select>
			</label>
			{#if information.service.Service_recuperate == true}
				<label class="label flex flex-col">
					<span>ฝากเลี้ยงกี่วัน : </span>
					<input bind:value={information.pet_amount} class="input" type="number" />
				</label>
				<label class="label flex flex-col">
					<span>Select Room : </span>
					<select class="select" bind:value={information.room}>
						<option value={0}>กรุณาเลือกห้อง</option>
						{#each rooms as room}
							<option value={room.Room_ID}>{room.Room_name}</option>
						{/each}
					</select>
				</label>
			{/if}
		</Step>

		<Step>
			<svelte:fragment slot="header">ตรวจสอบการนัดของคุณ</svelte:fragment>
			<div class="flex justify-around">
				<div>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span>Service : </span>
						<span>{information.service.Service_name}</span>
					</label>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span>Date : </span>
						<span>{information.pet_date}</span>
					</label>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span>Time : </span>
						<span>{information.time}</span>
					</label>
				</div>
				<div>
					{#if information.mode == 'new'}						
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span>Pet : </span>
							<span>{information.petname}</span>
						</label>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span>Pet Birthday : </span>
							<span>{information.petBD}</span>
						</label>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span>Pet Species : </span>
							<span>{information.petSpecies}</span>
						</label>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span>Pet Gender : </span>
							<span>{information.petGender}</span>
						</label>
						{:else}
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span>Pet : </span>
							<span>{selectedPet?.Pet_name}</span>
						</label>
					{/if}
					<!-- svelte-ignore a11y-label-has-associated-control -->
					{#if information.service.Service_recuperate == true}
						<label class="label">
							<span>Room : </span>
							<span>{information.room}</span>
						</label>
					{/if}
				</div>
			</div>
		</Step>
		<Step>
			<svelte:fragment slot="header">การนัดหมายเสร็จสิ้น</svelte:fragment>
			<div class="flex justify-center">
				<div class="flex flex-col items-center">
					<p>ขอบคุณที่ใช้บริการกับเรา</p>
				</div>
			</div>
		</Step>
	</Stepper>
</div>
