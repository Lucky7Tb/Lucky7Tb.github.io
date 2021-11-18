<template>
	<div id="app">
		<Navbar v-on:changeTheme="changeTheme" />
		<main>
			<Hero />
			<About />
			<Experiance />
			<Project />
			<Contact />
			<a
				href="#"
				class="fixed z-50 bottom-5 right-5 btn btn-primary btn-primary"
			>
				<img src="@/assets/img/icon/UpArrow.svg" alt="Arrow" />
			</a>
		</main>
		<Footer />
	</div>
</template>

<script>
	import Navbar from "./components/Navbar";
	import Footer from "./components/Footer";
	import Hero from "./components/Hero";
	import About from "./components/About";
	import Experiance from "./components/Experiance";
	import Project from "./components/Project";
	import Contact from "./components/Contact";

	export default {
		name: "App",
		components: {
			Navbar,
			Footer,
			Hero,
			About,
			Experiance,
			Project,
			Contact,
		},
		methods: {
			changeTheme(isLight) {
				const html = document.getElementsByTagName("html")[0];
				console.log(isLight);
				if (isLight) {
					html.dataset.theme = "emerald";
				} else {
					html.dataset.theme = "forest";
				}
			},
		},
	};
</script>
