<script>
	export let pet;
	console.log(pet);

    const updatePet = async () => {
        const req = await fetch(`/api/pet/${pet.Pet_ID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pet),
        });

        const res = await req.json();
        if (req.ok) {
            alert('อัพเดทข้อมูลสำเร็จ');
            window.location.reload();
        } else {
            alert(res.message);
        }
    };
</script>

<div class="card p-4">
	<h3>ข้อมูลสัตว์เลี้ยง</h3>
	<hr class="my-4" />
	<div class="flex flex-col gap-4">
		<label class="label">
			<span>ชื่อสัตว์เลี้ยง : </span>
			<input class="input" type="text" bind:value={pet.Pet_name} />
		</label>
		<label class="label">
			<span>ชนิด : </span>
			<input class="input" type="text" bind:value={pet.Pet_type} />
		</label>
		<label class="label">
			<span>พันธ์ : </span>
			<input class="input" type="text" bind:value={pet.Pet_species} />
		</label>
		<label class="label">
			<span>Pet Gender : </span>
			<label class="label flex items-center gap-2">
				<input
					class="radio"
					type="radio"
					name="radio-direct"
					value="เพศผู้"
					bind:group={pet.Pet_gender}
				/>
				<p>เพศผู้</p>
			</label>
			<label class="label flex items-center gap-2">
				<input
					class="radio"
					type="radio"
					name="radio-direct"
					value="เพศเมีย"
					bind:group={pet.Pet_gender}
				/>
				<p>เพศเมีย</p>
			</label>
		</label>
		<label class="label">
			<span>วันเกิด : </span>
			<input class="input" type="date" bind:value={pet.Pet_DOB} />
		</label>
		<label class="label">
			<span>สถานะ : </span>
			<input class="input" type="text" bind:value={pet.Case.State.State_detail} />
		</label>
        <button on:click={updatePet} class="btn variant-filled-primary">
            Update
        </button>
	</div>
</div>
