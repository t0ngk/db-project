<script>
  export let testtext = 'test';
  import { Stepper, Step } from '@skeletonlabs/skeleton';
</script>

<div class="card p-4 w-1/2">
  <Stepper>
    <Step>
      <svelte:fragment slot="header">เคยนำสัตว์เลี้ยงมารักษาที่นี่หรือไม่</svelte:fragment>
      (content)
    </Step>
    <Step>
      <svelte:fragment slot="header">(header)</svelte:fragment>
      (content)
    </Step>
  </Stepper>
</div>
