<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	function scollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="fixed top-4 right-4">
	<LightSwitch />
</div>

<div>
	<div class="flex flex-col justify-center items-center gap-4 h-screen w-full">
		<h1>Project Name</h1>
		<h2>Where care everything that you care</h2>
		<div class="flex gap-10">
			<button
				class="btn btn-xl variant-filled-primary"
				on:click={() => {
					goto('/login');
				}}>Get Start</button
			>
			<a
				href="#learn-more"
				class="btn btn-xl variant-outline-primary"
				on:click|preventDefault={scollIntoView}>Learn More</a
			>
		</div>
	</div>
	<div id="learn-more" class="flex flex-col justify-center items-center gap-4 h-screen w-full">
		<div class="flex w-1/2 gap-4">
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique at accusantium dolorem
				ipsam adipisci assumenda, laborum doloremque expedita eaque placeat cum neque, et doloribus.
				Fuga omnis impedit magni fugit libero.
			</p>
			<img class="w-full" src="https://via.placeholder.com/300" alt="" />
		</div>
	</div>
	<div class="flex flex-col justify-center items-center gap-4 h-screen w-full">
		<div class="flex w-1/2 gap-4">
			<img class="w-full" src="https://via.placeholder.com/300" alt="" />
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique at accusantium dolorem
				ipsam adipisci assumenda, laborum doloremque expedita eaque placeat cum neque, et doloribus.
				Fuga omnis impedit magni fugit libero.
			</p>
		</div>
	</div>
</div>
