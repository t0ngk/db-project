<script>
	let tabSet = 0;
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import InfoAppointment from '$lib/components/modal/InfoAppointment.svelte';
	import AddAdminAppointment from '$lib/components/modal/AddAdminAppointment.svelte';
	import InfoAdminPet from '$lib/components/modal/infoAdminPet.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	console.log(data.thisUser)

	let thisUser = data.thisUser;

	const informationPetModal = {
		type: 'component',
		component: {
			ref: InfoAdminPet
		}
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

	const openInformationPetModal = (pet) => {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: InfoAdminPet,
				props: {
					pet,
					user: data.user
				}
			}
		});
	};

	const informationAppointmentModal = {
		type: 'component',
		component: {
			ref: InfoAppointment
		}
	};

	const openInformationAppointmentModal = (appointment) => {
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

	const addAppointmentModal = {
		type: 'component',
		component: {
			ref: AddAdminAppointment,
			props: {
				pets: data.pets,
				services: data.services,
				rooms : data.rooms,
				id: data.id
			}
		}
	};

	const updateUser = async () => {
		const req = await fetch(`/api/user/${data.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...thisUser
			})
		});
		const res = await req.json();
		if (res.error) {
			console.log(res.error);
		} else {
			console.log(res);
			alert('Update Success');
		}
	}

	const openAddAppointmentModal = () => {
		modalStore.trigger(addAppointmentModal);
	};
</script>

<div class="card p-4 mx-4 my-4">
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>Profile</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Appointment</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Pet</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<h3>ข้อมูลส่วนตัว</h3>
				<hr class="my-3" />
				<div class="p-4 grid grid-cols-3 gap-4">
					<label class="label">
						<span>ชื่อ :</span>
						<input class="input" type="text" bind:value={thisUser.User_name} />
					</label>
					<label class="label">
						<span>เบอร์โทรศัพท์ :</span>
						<input class="input" type="tel" bind:value={thisUser.User_tel} />
					</label>
					<label class="label">
						<span>อีเมล :</span>
						<input class="input" type="email" bind:value={thisUser.User_email} />
					</label>
					<label class="label">
						<span>บทบาท :</span>
						<select bind:value={thisUser.User_role} class="select">
							<option value="0">เลือกบทบาท</option>
							<option value="Admin">แอดมิน</option>
							<option value="User">พนักงาน</option>
						</select>
					</label>
					<!-- <label class="label col-span-3">
						<span>ที่อยู่ :</span>
						<textarea class="textarea" rows="3" placeholder="ที่อยู่" disabled />
					</label> -->
					<br>
					<br>
					<button on:click={updateUser} class="btn variant-filled-primary w-full">Update</button>
				</div>
			{:else if tabSet === 1}
				<div class="flex">
					<h3>ข้อมูลการนัดหมาย</h3>
					<button class="btn bg-primary-600 ml-auto" on:click={openAddAppointmentModal}
						>เพิ่มการนัดหมาย</button
					>
				</div>
				<hr class="my-3" />
				<div class="flex flex-wrap gap-4">
					{#each appointments as appointment}
						<button on:click={()=>{openInformationAppointmentModal(appointment)}}>
							<div class="my-3 card p-4 card-hover cursor-pointer shadow-xl w-full text-start">
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
							</div>
						</button>
					{/each}
				</div>
			{:else if tabSet === 2}
				<div class="flex">
					<h3>ข้อมูลสัตว์เลี้ยง</h3>
				</div>
				<hr class="my-3" />
				<div class="flex gap-4 flex-wrap">
					{#each data.pets as pet}					
						<button on:click={()=>{openInformationPetModal(pet)}}>
							<div class="my-3 card p-4 card-hover cursor-pointer shadow-xl">
								<h3>{pet.Pet_name}</h3>
							</div>
						</button>
					{/each}
				</div>
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
