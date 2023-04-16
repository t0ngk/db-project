<script>
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import autoAnimate from '@formkit/auto-animate';
	import {goto} from '$app/navigation';
	/** @type {import('./$types').PageData} */
	export let data;
	let authMode = 'login';
	const fakeLogin = () => {
		localStorage.setItem('auth', 'true');
		// goto('/appointment');
		window.location.assign('/appointment');
	}
</script>

<div class="h-screen w-full justify-center items-center flex flex-col p-10">
	<div class="flex w-full h-full bg-primary-500 rounded-xl">
		<div class="w-full flex justify-center items-center">
			<img class="w-1/2" src="/boxbox2.png" alt="" srcset="">
		</div>
		<span class="divider-vertical h-full" />
		<div class="w-full justify-center items-center flex p-4">
			<div class="card h-full w-full p-4">
				<TabGroup>
					<Tab bind:group={authMode} name="login" value="login">Login</Tab>
					<Tab bind:group={authMode} name="register" value="register">Register</Tab>
					<!-- Tab Panels --->
					<svelte:fragment slot="panel">
						<div use:autoAnimate>
							{#if authMode === 'login'}
								<div class="p-4 flex flex-col gap-4">
									<label for="" class="label">
										Email
										<input class="input" placeholder="johndoe@gmail.com" type="text" />
									</label>
									<label for="" class="label">
										Password
										<input class="input" type="password" placeholder="••••••••" />
									</label>
									<button on:click={fakeLogin} class="btn btn-lg variant-filled-primary w-full">Login</button>
									<button
										class="text-start underline"
										on:click={() => {
											authMode = 'register';
										}}>Not Already Have Account?</button
									>
								</div>
							{:else if authMode === 'register'}
								<div class="p-4 flex flex-col gap-4">
									<label for="" class="label">
										Name
										<input class="input" placeholder="johndoe" type="text" />
									</label>
									<label for="" class="label">
										Email
										<input class="input" placeholder="johndoe@gmail.com" type="text" />
									</label>
									<label for="" class="label">
										Password
										<input class="input" type="password" placeholder="••••••••" />
									</label>
									<label for="" class="label">
										Confirm Password
										<input class="input" type="password" placeholder="••••••••" />
									</label>
									<button on:click={fakeLogin} class="btn btn-lg variant-filled-primary w-full">Register</button>
								</div>
							{/if}
						</div>
					</svelte:fragment>
				</TabGroup>
			</div>
		</div>
	</div>
</div>
