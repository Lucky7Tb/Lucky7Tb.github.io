<template>
	<!-- Experiance Section -->
	<section class="min-h-screen sm:min-h-full mt-24 sm:mt-10">
		<div id="experiance">
			<div class="p-5 flex flex-col">
				<div class="mb-10">
					<h2 class="text-center text-5xl font-bold mb-3 sm:mt-10">
						Experiance
					</h2>
					<div class="flex flex-col w-1/2 sm:w-1/3 lg:w-1/5 xl:w-52 mx-auto">
						<div
							class="grid h-2 card bg-primary rounded-box place-items-center"
						></div>
					</div>
				</div>
				<div class="mt-5 p-5">
					<div class="flex flex-col lg:flex-row gap-y-5 sm:gap-x-5">
						<div
							class="
								card
								bg-base-200
								shadow-lg
								sm:full
								transition
								duration-300
								ease-in-out
								transform
								hover:scale-110
							"
						>
							<div class="card-body">
								<h2 class="card-title font-bold text-3xl text-center">
									Pt Inovasi Putra Nusantara
								</h2>
								<h3
									class="
										card-title
										font-semibold
										text-2xl text-center text-primary
									"
								>
									Fullstack Web Developer
								</h3>
								<p class="text-center text-xl text-light">
									As an intern, create a web app that is useful for see the
									population density in the city. work as a small team with my
									friends, very fun journey because I learn a lot about Yii 2
									framework and version control.
								</p>
								<a
									href="https://www.facebook.com/inovasiputranusantara"
									target="_blank"
									rel="nooppener"
									class="
										btn btn-primary
										rounded-lg
										mt-5
										w-full
										sm:w-40 sm:mx-auto
									"
									>More info</a
								>
							</div>
						</div>
						<div
							class="
								card
								bg-base-200
								shadow-lg
								sm:full
								transition
								duration-300
								ease-in-out
								transform
								hover:scale-110
							"
						>
							<div class="card-body">
								<h2 class="card-title font-bold text-3xl text-center">
									Simple School
								</h2>
								<h3
									class="
										card-title
										font-semibold
										text-2xl text-center text-primary
									"
								>
									Fullstack Web Developer
								</h3>
								<p class="text-center text-xl text-light">
									Create a CMS for schools, so that schools can have a website
									in a minute. Work as a small team with my friends, very fun
									and exciting project. In this project, I learn a lot about
									Vue.js, laravel, and team management.
								</p>
								<a
									href="https://simpleschooldev.com/"
									target="_blank"
									rel="nooppener"
									class="btn btn-primary rounded-lg mt-5 sm:w-40 sm:mx-auto"
									>More info</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End Experiance Section -->
</template>

<script>
	export default {
		name: "Experiance",
	};
</script>
