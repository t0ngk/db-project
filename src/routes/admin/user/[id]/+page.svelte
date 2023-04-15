<script>
	let tabSet = 0;
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    import { modalStore } from '@skeletonlabs/skeleton';
    import InfoAdminAppointment from '../../../../lib/components/modal/InfoAdminAppointment.svelte';
	import AddAdminAppointment from '../../../../lib/components/modal/AddAdminAppointment.svelte';
	import InfoAdminPet from '../../../../lib/components/modal/infoAdminPet.svelte';
    
	const informationPetModal = {
		type: 'component',
		component: {
			ref: InfoAdminPet
		}
	};

	const openInformationPetModal = () => {
		modalStore.trigger(informationPetModal);
	};
	
	const informationAppointmentModal = {
        type: 'component',
        component: {
            ref: InfoAdminAppointment
        }
    };

    const openInformationAppointmentModal = () => {
        modalStore.trigger(informationAppointmentModal);
    };

	const addAppointmentModal = {
		type: 'component',
		component: {
			ref: AddAdminAppointment
		}
	};

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
						<input class="input" type="text" disabled value="" />
					</label>
					<label class="label">
						<span>นามสกุล :</span>
						<input class="input" type="text" disabled value="" />
					</label>
					<label class="label">
						<span>เบอร์โทรศัพท์ :</span>
						<input class="input" type="tel" disabled value="" />
					</label>
					<label class="label">
						<span>อีเมล :</span>
						<input class="input" type="email" disabled value="" />
					</label>
					<label class="label">
						<span>เพศ :</span>
						<div class="flex gap-2">
                            <div class="flex gap-3">
                                <input class="radio" type="radio" checked name="radio-direct" value="1" disabled/>
                                <p>ชาย</p>
                            </div>
                            <div class="flex gap-3">
                                <input class="radio" type="radio" name="radio-direct" value="2" disabled/>
                                <p>หญิง</p>
                            </div>
						</div>
					</label>
					<label class="label">
						<span>บทบาท :</span>
						<select class="select">
							<option value="0">เลือกบทบาท</option>
							<option value="1">แอดมิน</option>
							<option value="2">พนักงาน</option>
						</select>
					</label>
					<label class="label col-span-3">
						<span>ที่อยู่ :</span>
						<textarea class="textarea" rows="3" placeholder="ที่อยู่" disabled />
					</label>
				</div>
			{:else if tabSet === 1}
				<div class="flex">
					<h3>ข้อมูลการนัดหมาย</h3>
					<button class="btn bg-primary-600 ml-auto" on:click={openAddAppointmentModal}>เพิ่มการนัดหมาย</button>
				</div>
                <hr class="my-3" />
                <button on:click={openInformationAppointmentModal}>
                    <div class="my-3 card p-4 card-hover cursor-pointer shadow-xl w-full">
                        <h3>Appointment name</h3>
                    </div>
                </button>
			{:else if tabSet === 2}
				<div class="flex">
					<h3>ข้อมูลสัตว์เลี้ยง</h3>
				</div>
				<hr class="my-3" />
				<button on:click={openInformationPetModal}>
                    <div class="my-3 card p-4 card-hover cursor-pointer shadow-xl">
                        <h3>Pet name</h3>
                    </div>
                </button>
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
