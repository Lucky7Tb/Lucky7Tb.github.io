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
			sm:flex sm:mb-20
		"
	>
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