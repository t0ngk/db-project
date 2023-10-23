<script>
  import { modalStore } from '@skeletonlabs/skeleton';
  const addForum = async (events) => {
    const formData = new FormData(events.target);
    const data = Object.fromEntries(formData);
    const res = await fetch('/api/forum', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();

    if (res.ok) {
      alert('เพิ่มกระทู้สำเร็จ');
      modalStore.close();
      window.location.reload();
    } else {
      alert(json.message);
    }
  }
</script>

<form on:submit|preventDefault={addForum} class="card p-4 flex flex-col gap-4 max-h-screen overflow-y-scroll w-3/4">
  <h1>Add Forum</h1>
  <label class="label">
    Title
    <input class="input" name="title" type="text" placeholder="Title" />
  </label>
  <label class="label">
    Content
    <textarea class="textarea" name="content" rows="15" placeholder="Content"></textarea>
  </label>
  <button type="submit" class="btn variant-filled-primary">Post</button>
</form>
