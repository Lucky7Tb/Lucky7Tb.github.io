<template>
	<!-- Project Section -->
	<section class="min-h-screen sm:min-h-full mt-24 sm:mt-10">
		<div id="project">
			<div class="flex flex-col">
				<div class="mb-3">
					<h2 class="text-center text-5xl font-bold mb-3 sm:mt-16">Project</h2>
					<div class="flex flex-col w-1/2 sm:w-1/5 lg:w-1/6 xl:w-40 mx-auto">
						<div
							class="grid h-2 card bg-primary rounded-box place-items-center"
						></div>
					</div>
				</div>
				<div class="p-10">
					<div class="tabs tabs-boxed justify-center bg-transparent">
						<a
							href="#"
							:class="`
								tab hover:text-primary text-xl ${webTab ? 'tab-active' : null}
							`"
							id="web-tab"
							@click.prevent="changeToWebProject"
							>Web</a
						>
						<a
							href="#"
							:class="`
								tab hover:text-primary text-xl ${mobileTab ? 'tab-active' : null}
							`"
							id="mobile-tab"
							@click.prevent="changeToMobileProject"
							>Mobile</a
						>
					</div>

					<transition name="fade-y">
						<div
							:class="`${
								webTab ? null : 'hidden'
							} flex flex-col justify-center gap-y-5 mt-5`"
							id="web-content"
							v-if="webTab"
						>
							<div
								class="
									grid 
									grid-cols-1
									sm:grid-cols-1
									lg:grid-cols-2
									gap-y-5
									sm:gap-x-5
								"
							>
								<div class="border mockup-window border-base-300 w-full">
									<label for="goru_project_modal" class="modal-button">
										<div
											class="
												flex
												justify-center
												px-4
												py-16
												border-t border-base-300
												h-96
												project-bg
												goru
											"
										></div>
									</label>
									<input
										type="checkbox"
										id="goru_project_modal"
										class="modal-toggle"
									/>
									<div class="modal">
										<div class="modal-box">
											<h4 class="text-center text-xl font-bold">Goru</h4>
											<p class="text-center font-light">
												Web application for admin goru to confirm transaction in goru application.This web application build use Vue js as
												a frontend, and Laravel as a backend.
											</p>
											<div class="modal-action">
												<label
													for="goru_project_modal"
													class="btn btn-outline"
													>Close</label
												>
											</div>
										</div>
									</div>
								</div>

								<div class="border mockup-window border-base-300 w-full">
									<label for="findart_project_modal" class="modal-button">
										<div
											class="
												flex
												justify-center
												px-4
												py-16
												border-t border-base-300
												h-96
												project-bg
												findart
											"
										></div>
									</label>
									<input
										type="checkbox"
										id="findart_project_modal"
										class="modal-toggle"
									/>
									<div class="modal">
										<div class="modal-box">
											<h4 class="text-center text-xl font-bold">Findart</h4>
											<p class="text-center font-light">
												Web application to find housekeepers. it's help
												housewife to find a housekeeper and to help housekeepers
												to find a job. This web application build use Vue js as
												a frontend, and Laravel as a backend.
											</p>
											<div class="modal-action">
												<label
													for="findart_project_modal"
													class="btn btn-outline"
													>Close</label
												>
											</div>
										</div>
									</div>
								</div>

								<div class="border mockup-window border-base-300 w-full">
									<label for="bc_project_modal" class="modal-button">
										<div
											class="
												flex
												justify-center
												px-4
												py-16
												border-t border-base-300
												h-96
												project-bg
												bakers-corner
											"
										></div>
									</label>
									<input
										type="checkbox"
										id="bc_project_modal"
										class="modal-toggle"
									/>
									<div class="modal">
										<div class="modal-box">
											<h4 class="text-center text-xl font-bold">
												Baker's Corner
											</h4>
											<p class="text-center font-light">
												Web application for Baker's Corner. Baker's Corner is a
												bread shop in the School of Applied Science Telkom
												University. This web application has many features to
												help the staff manage their product. In this project, I
												build a cashier feature, product management, coupon
												feature, and user management feature. This application
												build using Codeigniter 3 framework.
											</p>
											<div class="modal-action">
												<label for="bc_project_modal" class="btn btn-outline"
													>Close</label
												>
											</div>
										</div>
									</div>
								</div>

								<div class="border mockup-window border-base-300 w-full">
									<label for="gis_project_modal" class="modal-button">
										<div
											class="
												flex
												justify-center
												px-4
												py-16
												border-t border-base-300
												h-96
												project-bg
												gis-mapping
											"
										></div>
									</label>
									<input
										type="checkbox"
										id="gis_project_modal"
										class="modal-toggle"
									/>
									<div class="modal">
										<div class="modal-box">
											<h4 class="text-center text-xl font-bold">Gis Mapping</h4>
											<p class="text-center font-light">
												Gis Mapping is a web application to see population
												density in a city. Unfortunately, the population data is
												still manually created in the admin panel. Because I
												can't found the open data for population density in
												Indonesia per city. This project is my project in an
												internship in Pt Inovasi Putra Nusantara when I was in
												high school. This application builds using Yii2
												framework.
											</p>
											<div class="modal-action">
												<label for="gis_project_modal" class="btn btn-outline"
													>Close</label
												>
											</div>
										</div>
									</div>
								</div>

								<div class="border mockup-window border-base-300 w-full">
									<label for="ticket_project_modal" class="modal-button">
										<div
											class="
												flex
												justify-center
												px-4
												py-16
												border-t border-base-300
												h-96
												project-bg
												book-ticket
											"
										></div>
									</label>
									<input
										type="checkbox"
										id="ticket_project_modal"
										class="modal-toggle"
									/>
									<div class="modal">
										<div class="modal-box">
											<h4 class="text-center text-xl font-bold">
												Book Ticket KRL
											</h4>
											<p class="text-center font-light">
												This web application was created for my last semester
												assignment. The project is simple, not too complex. The
												application is used for a user to booking a trains
												ticket. In this project, I use Yii2 framework.
											</p>
											<div class="modal-action">
												<label
													for="ticket_project_modal"
													class="btn btn-outline"
													>Close</label
												>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</transition>

					<transition name="fade-y">
						<div
							:class="`${
								mobileTab ? null : 'hidden'
							} flex-col items-center justify-center gap-y-5 mt-5`"
							id="mobile-content"
							v-if="mobileTab"
						>
							<div class="grid grid-cols-1 gap-y-5 sm:grid-cols-3 sm:gap-x-5">
								<div class="flex flex-col items-center justify-center">
									<label for="goru_mobile_project_modal" class="modal-button">
										<img
											src="@/assets/img/project/goru_mobile.png"
											class="mx-auto"
											width="55%"
											alt="covid_mobile"
										/>
									</label>
									<input
										type="checkbox"
										id="goru_mobile_project_modal"
										class="modal-toggle"
									/>
									<div class="modal">
										<div class="modal-box">
											<h4 class="text-center text-xl font-bold">
												Covid Mobile
											</h4>
											<p class="text-center font-light">
												This application is my campus project. This application is called Goru (Golek Guru) which is mean <i>find teacher</i>. This application is used for student especially the elementary school student until high school student to find online private teacher. Of course student learning online to using meet link the given by teacher. This project build using React Native and Native Base.
											</p>
											<div class="modal-action">
												<label
													for="goru_mobile_project_modal"
													class="btn btn-outline"
													>Close</label
												>
											</div>
										</div>
									</div>
								</div>

								<div class="flex flex-col items-center justify-center">
									<label for="covid_mobile_project_modal" class="modal-button">
										<img
											src="@/assets/img/project/covid_mobile.webp"
											class="mx-auto"
											width="80%"
											alt="covid_mobile"
										/>
									</label>
									<input
										type="checkbox"
										id="covid_mobile_project_modal"
										class="modal-toggle"
									/>
									<div class="modal">
										<div class="modal-box">
											<h4 class="text-center text-xl font-bold">
												Covid Mobile
											</h4>
											<p class="text-center font-light">
												This application is my first school assignment from home
												due to a pandemic. The application is has a feature to
												see statistic covid 19 in Indonesia and World, Test
												covid risk, Hot news covid 19, and FAQ. This project
												builds using React Native and for the UI, i try this
												<a href="https://builderx.io/" target="_blank" rel="noopener" class="link">
													cool react native ui builder
												</a>
											</p>
											<div class="modal-action">
												<label
													for="covid_mobile_project_modal"
													class="btn btn-outline"
													>Close</label
												>
											</div>
										</div>
									</div>
								</div>

								<div class="flex flex-col items-center justify-center">
									<label for="env_mobile_project_modal" class="modal-button">
										<img
											src="@/assets/img/project/inventory_mobile.webp"
											class="mx-auto"
											width="80%"
											alt="inventory_mobile"
										/>
									</label>
									<input
										type="checkbox"
										id="env_mobile_project_modal"
										class="modal-toggle"
									/>
									<div class="modal">
										<div class="modal-box">
											<h4 class="text-center text-xl font-bold">
												Inventory Mobile
											</h4>
											<p class="text-center font-light">
												This mobile application for booking and borrow items in
												inventory technology information vocational high school
												1 Katapang. So the user or student can borrow an item
												use this application or directly come to the admin. This
												project builds using React Native and React Native Element
											</p>
											<div class="modal-action">
												<label
													for="env_mobile_project_modal"
													class="btn btn-outline"
													>Close</label
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Project",
		data() {
			return {
				webTab: true,
				mobileTab: false,
			};
		},
		methods: {
			changeToWebProject() {
				this.webTab = true;
				this.mobileTab = false;
			},
			changeToMobileProject() {
				this.webTab = false;
				this.mobileTab = true;
			},
		},
	};
</script>

<style scoped>
	.fade-y-enter-active {
		transition: all 0.3s ease-in-out;
	}
	.fade-y-leave-active {
		transition: all 0.2s;
	}
	.fade-y-enter,
	.fade-y-leave-to {
		transform: translateY(-50px);
		opacity: 0;
	}

</style>

