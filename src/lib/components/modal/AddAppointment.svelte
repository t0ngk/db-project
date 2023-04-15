<script>
	import { Stepper, Step, RadioGroup, RadioItem, focusTrap } from '@skeletonlabs/skeleton';
	let value = 0;
	let isFocused = true;

  let information = {
    pet: '',
    service: '',
    date: '',
    time: '',
    room: '',
    petType: '',
    phoneNumber: '',
  }

	let pets = [
		{
			name: 'pet1',
			type: 'dog'
		},
		{
			name: 'pet2',
			type: 'cat'
		}
	];

	let services = [
		{
			name: 'ตรวจสุขภาพ',
			price: 1500
		},
		{
			name: 'อาบน้ำตัดขน',
			price: 1000
		},
		{
			name: 'ฝากเลี้ยง',
			price: 1000
		}
	];
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

  let rooms = [{
    name: '100',
    status: 'available'
  },{
    name: '101',
    status: 'available'
  },{
    name: '102',
    status: 'available'
  },{
    name: '103',
    status: 'available'
  },{
    name: '104',
    status: 'available'
  },{
    name: '105',
    status: 'available'
  },{
    name: '106',
    status: 'available'
  },{
    name: '107',
    status: 'available'
  },{
    name: '108',
    status: 'available'
  }]
</script>

<div class="card p-4 w-1/2">
	<Stepper>
		<Step>
			<svelte:fragment slot="header">เคยนำสัตว์เลี้ยงมารักษาที่นี่หรือไม่</svelte:fragment>
			<RadioGroup>
				<RadioItem bind:group={value} name="justify" value={0}>เคยใช้</RadioItem>
				<RadioItem bind:group={value} name="justify" value={1}>ไม่เคย</RadioItem>
			</RadioGroup>
			{#if value == 0}
				<div>
					<span>Pet Name : </span>
					<select class="select" bind:value={information.pet}>
						{#each pets as pet}
							<option>{pet.name}</option>
						{/each}
					</select>
				</div>
			{:else}
				<form>
					<label class="label">
						<span>Pet Name : </span>
						<input class="input" type="text" placeholder="Pet Name" bind:value={information.pet}/>
					</label>
					<label class="label">
						<span>Pet Type : </span>
						<select class="select" bind:value={information.petType}>
							<option>dog</option>
							<option>cat</option>
						</select>
					</label>
					<label class="label">
						<span>Pet Type : </span>
						<div class="flex">
							<label class="flex items-center space-x-2">
								<input class="radio" type="radio" checked name="radio-direct" value="1" />
								<p>เพศผู้</p>
							</label>
							<label class="flex items-center space-x-2">
								<input class="radio" type="radio" checked name="radio-direct" value="1" />
								<p>เพศเมีย</p>
							</label>
						</div>
            <label class="label">
              <span>Phone number : </span>
              <input class="input" type="number" placeholder="Phone number" bind:value={information.phoneNumber}/>
            </label>
					</label>
				</form>
			{/if}
		</Step>
		<Step>
			<svelte:fragment slot="header">เลือกบริการและวันที่ต้องการนัด</svelte:fragment>
			<label class="label">
				<span>Select Service : </span>
				<select class="select" bind:value={information.service}>
          <option>กรุณาเลือกบริการ</option>
					{#each services as services}
						<option>{services.name}</option>
					{/each}
				</select>
			</label>

			<label class="label">
				<span>Select Date : </span>
				<input class="input" type="date" bind:value={information.date}/>
			</label>

			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label flex flex-col">
				<span>Select Time : </span>
				<select class="select" bind:value={information.time}>
					<option value="0">กรุณาเลือกเวลา</option>
					{#each times as time}
						<option>{time.time}</option>
					{/each}
				</select>
			</label>
      {#if information.service == 'ฝากเลี้ยง'}
      <label class="label flex flex-col">
				<span>Select Room : </span>
				<select class="select" bind:value={information.room}>
					<option value="0">กรุณาเลือกห้อง</option>
					{#each rooms as room}
						<option>{room.name}</option>
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
            <span>{information.service}</span>
          </label>
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">
            <span>Date : </span>
            <span>{information.date}</span>
          </label>
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">
            <span>Time : </span>
            <span>{information.time}</span>
          </label>
        </div>
        <div>
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label">
            <span>Pet : </span>
            <span>{information.pet}</span>
          </label>
          <!-- svelte-ignore a11y-label-has-associated-control -->
          {#if information.service == 'ฝากเลี้ยง'}
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
