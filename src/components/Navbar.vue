<template>
	<div
		class="
			navbar
			mb-4
			px-10
			shadow-lg
			bg-base-100
			text-neutral-content
			w-full
			z-10
			sm:flex 
			fixed
			top-0
		"
	>
		<div class="flex-none flex sm:hidden">
			<div class="dropdown">
				<label 
					tabindex="0" 
					class="btn btn-circle border-0 bg-transparent"
					:class="`${lightTheme ? 'text-black' : 'text-white'} ${lightTheme ? 'hover:bg-gray-300' : 'hover:bg-base-300'}`">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
				</label>
				<ul 
					tabindex="0" 
					class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg rounded-box w-52 bg-base-100"
					:class="lightTheme ? 'text-primary' : null">
					<li><a href="#about">About</a></li>
					<li><a href="#experiance">Experiance</a></li>
					<li><a href="#project">Project</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</div>
		<div class="hidden sm:flex flex-none px-2 mx-2">
			<p class="text-2xl font-bold text-primary mb-1">Lucky</p>
		</div>
		<div class="flex-1 px-2 mx-2">
			<div class="items-stretch hidden sm:flex">
				<a
					:class="`btn btn-ghost btn-sm rounded-lg text-md hover:bg-primary ${
						lightTheme ? 'text-black' : 'text-white'
					}`"
					href="#about"
					>About</a
				>
				<a
					:class="`btn btn-ghost btn-sm rounded-lg text-md hover:bg-primary ${
						lightTheme ? 'text-black' : 'text-white'
					}`"
					href="#experiance"
					>Experiance</a
				>
				<a
					:class="`btn btn-ghost btn-sm rounded-lg text-md hover:bg-primary ${
						lightTheme ? 'text-black' : 'text-white'
					}`"
					href="#project"
					>Project</a
				>
				<a
					:class="`btn btn-ghost btn-sm rounded-lg text-md hover:bg-primary ${
						lightTheme ? 'text-black' : 'text-white'
					}`"
					href="#contact"
					>Contact</a
				>
			</div>
		</div>
		<div class="flex flex-row space-x-2">
			<div class="flex-none">
				<button
					:class="`
				${lightTheme ? darkThemeButonColor : lightThemeButonColor}
				btn
				btn-square
				btn-md
				border-0
			`"
					@click="changeTheme"
				>
					<img
						v-if="lightTheme"
						src="@/assets/img/icon/Moon.svg"
						size="10px"
						alt="moon"
					/>
					<img v-else src="@/assets/img/icon/Sun.svg" size="10px" alt="sun" />
				</button>
			</div>
		</div>
	</div>
	<!-- End Navbar -->
</template>

<script>
	export default {
		name: "Navbar",
		data() {
			return {
				lightTheme: false,
				lightThemeButonColor: "bg-yellow-300 hover:bg-yellow-500",
				darkThemeButonColor: "bg-purple-500 hover:bg-purple-700",
			};
		},
		methods: {
			changeTheme() {
				this.lightTheme = !this.lightTheme;
				this.$emit("changeTheme", this.lightTheme);
			},
		},
	};
</script>

<style>
</style>