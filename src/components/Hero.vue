<template>
	<!-- Hero Section -->
	<div class="hero min-h-screen bg-base-100 sm:min-h-full mt-0 sm:mt-16">
		<div class="hero-content flex-row lg:flex-row-reverse justify-around">
			<div class="hidden sm:hidden xl:block ml-48">
				<lottie-player
					autoplay
					loop
					mode="normal"
					src="https://assets8.lottiefiles.com/packages/lf20_1LhsaB.json"
					style="width: 450px"
					class="max-w-xl rounded-lg"
				></lottie-player>
			</div>
			<div class="flex flex-col text-center xl:text-left">
				<h1 class="mb-5 text-5xl font-bold">Hello,</h1>
				<h1 class="mb-5 text-5xl font-bold">
					I'm <span class="text-primary">Lucky</span> Tri Bhakti
				</h1>
				<h1 class="mb-5 text-5xl font-bold">
					<span class="text-primary">Web</span> Developer
				</h1>
				<div class="flex flex-row justify-center xl:justify-start mt-5">
					<div class="mr-5">
						<a href="https://github.com/Lucky7Tb" rel="nooppener">
							<img
								src="@/assets/img/icon/Github.svg"
								class="
									transition
									duration-300
									ease-in-out
									transform
									hover:scale-125
								"
								alt="github"
								loading="lazy"
							/>
						</a>
					</div>
					<div class="mr-5">
						<a href="https://luckytribhakti.medium.com/" rel="nooppener">
							<img
								src="@/assets/img/icon/Medium.svg"
								class="
									transition
									duration-300
									ease-in-out
									transform
									hover:scale-125
								"
								alt="medium"
								loading="lazy"
							/>
						</a>
					</div>
					<div class="mr-5">
						<a
							href="https://www.linkedin.com/in/luckytribhakti/"
							rel="nooppener"
						>
							<img
								src="@/assets/img/icon/Linkedin.svg"
								class="
									transition
									duration-300
									ease-in-out
									transform
									hover:scale-125
								"
								alt="linkedin"
								loading="lazy"
							/>
						</a>
					</div>
				</div>
				<a
					href="#contact"
					class="
						btn btn-primary
						rounded-lg
						mt-10
						w-full
						sm:w-36 sm:mx-auto
						xl:ml-0
					"
				>
					Get In Touch
				</a>
			</div>
		</div>
	</div>
	<!-- End Hero Section -->
</template>

<script>
	require("@lottiefiles/lottie-player");
	export default {
		name: "Hero",
	};
</script>
