<template>
	<!-- About Section -->
	<section class="min-h-screen sm:min-h-full mt-24 sm:mt-10">
		<div id="about">
			<div class="p-5 flex flex-col">
				<div class="mb-20">
					<h2 class="text-center text-5xl font-bold mb-3 sm:mt-10">
						About <span class="text-primary">Me</span>
					</h2>
					<div class="flex flex-col w-1/2 sm:w-1/3 lg:w-1/6 xl:w-44 mx-auto">
						<div
							class="grid h-2 card bg-primary rounded-box place-items-center"
						></div>
					</div>
				</div>
				<div class="flex flex-col xl:flex-row gap-y-10">
					<div class="text-center w-full">
						<h3 class="text-center font-semibold text-4xl">I'm</h3>
						<p class="mt-5 font-light text-lg lg:text-2xl">
							A Communicative and hard worker person student from Bandung, study
							at Telkom University, majoring in diploma software engineering
							application. Currently spend my time as a mentor at <a href="https://www.instagram.com/chevalierlab_sas/" target="_blank" class="text-primary font-bold">Chevalier lab</a> teaching a web development espescially in front end web development using vue js
						</p>
					</div>
					<div>
						<h3 class="text-center font-semibold text-4xl">Skills</h3>
						<div class="flex flex-col gap-y-20">
							<div
								class="
									grid grid-cols-3
									sm:grid-cols-4
									gap-x-3 gap-y-5
									mt-5
									sm:mt-10
								"
							>
								<img
									src="@/assets/img/icon/Html.svg"
									alt="HTML"
									class="
										w-20
										sm:w-1/2
										lg:w-1/3
										xl:w-1/2
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
								<img
									src="@/assets/img/icon/Css.svg"
									alt="CSS"
									class="
										w-20
										sm:w-1/2
										lg:w-1/3
										xl:w-1/2
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
								<img
									src="@/assets/img/icon/Javascript.svg"
									alt="Javascript"
									class="
										w-20
										sm:w-1/2
										lg:w-1/3
										xl:w-1/2
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
								<img
									src="@/assets/img/icon/PHP.svg"
									alt="PHP"
									class="
										w-20
										sm:w-1/2
										lg:w-1/3
										xl:w-1/2
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
								<img
									src="@/assets/img/icon/Bootstrap.svg"
									alt="Bootstrap"
									class="
										w-20
										sm:w-1/2
										lg:w-1/3
										xl:w-1/2
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
								<img
									src="@/assets/img/icon/Materializecss.svg"
									alt="Materializecss"
									class="
										w-32
										sm:w-3/4
										lg:w-1/3
										xl:w-32
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
								<img
									src="@/assets/img/icon/Codeigniter.svg"
									alt="Codeigniter"
									class="
										w-20
										sm:w-1/2
										lg:w-1/3
										xl:w-1/2
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
								<img
									src="@/assets/img/icon/Laravel.svg"
									alt="Laravel"
									class="
										w-20
										sm:w-1/2
										lg:w-1/3
										xl:w-1/2
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
								<img
									src="@/assets/img/icon/Express.svg"
									alt="Express"
									class="
										w-20
										sm:w-1/2
										lg:w-1/3
										xl:w-1/2
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
								<img
									src="@/assets/img/icon/Vue.svg"
									alt="Laravel"
									class="
										w-20
										sm:w-1/2
										lg:w-1/3
										xl:w-1/2
										mx-auto
										transition
										duration-300
										ease-in-out
										transform
										hover:scale-125
									"
									loading="lazy"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End About Section -->
</template>

<script>
	export default {
		name: "About",
	};
</script>
