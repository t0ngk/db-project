<script>
    const addService = async (events) => {
        const formData = new FormData(events.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/service', {
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
    <form on:submit|preventDefault={addService} class="flex flex-col gap-3">
        <label class="label">
            <span>Name :</span>
            <input class="input" name="Service_name" type="text" />
        </label>
        <label class="label">
            <span>Type :</span>
            <select class="select" name="Service_type">
              <option value="Grooming">Grooming</option>
              <option value="Boarding">Boarding</option>
              <option value="Training">Training</option>
              <option value="Others">Others</option>
            </select>
        </label>
        <div class="flex justify-end mt-4 gap-3">
            <button type="submit" class="btn bg-primary-700">เพิ่ม</button>
        </div>
    </form>
</div>
