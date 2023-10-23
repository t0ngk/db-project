<script>
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import autoAnimate from '@formkit/auto-animate';
	import { goto } from '$app/navigation';
	/** @type {import('./$types').PageData} */
	export let data;
	let authMode = 'login';
	const fakeLogin = () => {
		localStorage.setItem('auth', 'true');
		// goto('/appointment');
		window.location.assign('/appointment');
	};

	const login = async (event) => {
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const result = await response.json();
		if (response.ok && result) {
			alert('Login Success');
			window.location.assign('/appointment');
		} else {
			alert(result.message);
		}
	};

	const register = async (event) => {
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		if (data.password !== data.confirmPassword) {
			alert('Password not match');
			return;
		}
		const response = await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const result = await response.json();
		if (response.ok && result) {
			alert('Register Success');
			window.location.assign('/appointment');
		} else {
			alert(result.message);
		}
	};
</script>

<div class="h-screen w-full justify-center items-center flex flex-col p-10">
	<div class="flex w-full h-full bg-primary-500 rounded-xl">
		<div class="w-full flex justify-center items-center">
			<img class="w-1/2" src="/boxbox2.png" alt="" srcset="" />
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
								<form on:submit|preventDefault={login} class="p-4 flex flex-col gap-4">
									<label for="" class="label">
										Email
										<input class="input" name="email" placeholder="johndoe@gmail.com" type="text" />
									</label>
									<label for="" class="label">
										Password
										<input class="input" name="password" type="password" placeholder="••••••••" />
									</label>
									<button type="submit" class="btn btn-lg variant-filled-primary w-full"
										>Login</button
									>
									<button
										class="text-start underline"
										on:click={() => {
											authMode = 'register';
										}}>Not Already Have Account?</button
									>
								</form>
							{:else if authMode === 'register'}
								<form on:submit|preventDefault={register} class="p-4 flex flex-col gap-4">
									<label for="" class="label">
										Name
										<input class="input" name="name" placeholder="johndoe" type="text" />
									</label>
									<label for="" class="label">
										Email
										<input class="input" name="email" placeholder="johndoe@gmail.com" type="text" />
									</label>
									<label for="" class="label">
										Password
										<input class="input" name="password" type="password" placeholder="••••••••" />
									</label>
									<label for="" class="label">
										Confirm Password
										<input class="input" name="confirmPassword" type="password" placeholder="••••••••" />
									</label>
									<button type="submit" class="btn btn-lg variant-filled-primary w-full"
										>Register</button
									>
								</form>
							{/if}
						</div>
					</svelte:fragment>
				</TabGroup>
			</div>
		</div>
	</div>
</div>
