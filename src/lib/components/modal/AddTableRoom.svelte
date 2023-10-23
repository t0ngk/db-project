<script>
    const addRoom = async (events) => {
        const formData = new FormData(events.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/room', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (response.ok) {
            alert('Add Success');
            window.location.assign('/admin');
        } else {
            alert(result.message);
        }
    }
</script>

<div class="card p-4">
    <h3>เพิ่มข้อมูลห้อง</h3>
    <hr class="my-3"/>
    <form on:submit|preventDefault={addRoom} class="flex flex-col gap-3">
        <label class="label">
            <span>Name :</span>
            <input class="input" name="Room_name" type="text" />
        </label>
        <label class="label">
            <span>Type :</span>
            <input class="input" name="Room_type" type="text" />
        </label>
        <div class="flex justify-end mt-4 gap-3">
            <button type="submit" class="btn bg-primary-700">เพิ่ม</button>
        </div>
    </form>
</div>
