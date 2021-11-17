<template>
	<footer class="p-4 footer bg-primary text-base-content footer-center text-lg">
		<div>
			<p>
				Copyright © <span ref="year"></span> - Lucky Tri Bhakti - Made With ❤
			</p>
		</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
		mounted() {
			const date = new Date();
			this.$refs.year.innerHTML = date.getFullYear();
		},
	};
</script>

<style>
</style>