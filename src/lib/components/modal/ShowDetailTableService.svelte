<script>    
  export let daataa;

  const deleteService = async () => {
    const service = await fetch(`/api/service/${daataa.detail[0]}`, {
      method: 'DELETE'
    });

    const result = await service.json();
    if (service.ok) {
      alert('Delete Success');
      window.location.assign('/service');
    } else {
      alert(result.message);
    }
  }
</script>

<div class="card p-3">
  <h3>ข้อมูลห้อง</h3>
  <hr class="my-3"/>
  <div class="flex flex-col gap-3">
      <label class="label">
          <span>id :</span>
          <input class="input" type="text" disabled bind:value={daataa.detail[0]}/>
      <label class="label">
          <span>Name :</span>
          <input class="input" type="text" bind:value={daataa.detail[1]}/>
      </label>
      
      <label class="label">
          <span>Type :</span>
          <select class="select" bind:value={daataa.detail[2]}>
            <option value="Grooming">Grooming</option>
            <option value="Boarding">Boarding</option>
            <option value="Training">Training</option>
            <option value="Others">Others</option>
          </select>
      </label>
  </div>
  <div class="flex justify-end mt-4 gap-3">
      <button class="btn bg-primary-700">Edit</button>
      <button class="btn bg-secondary-600 ml-2" on:click={deleteService}>Delete</button>
  </div>
</div>
