<script>
  export let appointment;
  console.log(appointment);
  let fakeRole = "Admin";
</script>

<div class="card p-4">
  <h1>{appointment.name}</h1>
  <p>{appointment.day}</p>
  <p>{appointment.time}</p>
  <p>{appointment.room}</p>
  <p>{appointment.pet}</p>
  <p>{appointment.status}</p>

  {#if appointment.status === 'Pending'}
    {#if fakeRole === 'Admin'}
      <button class="btn variant-filled-success">Approve</button>
      <button class="btn variant-filled-error">Reject</button>
    {:else}
      <button class="btn variant-filled-error">Cancel</button>
    {/if}
  {:else if appointment.status === 'Rejected'}
    <button class="btn variant-filled-error">Delete</button>
  {/if}
</div>
