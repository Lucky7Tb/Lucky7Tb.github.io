<template>
	<!-- Contact section -->
	<section class="min-h-full mt-10 mb-16">
		<div id="contact">
			<div class="flex flex-col">
				<div class="mb-3">
					<h2 class="text-center text-5xl font-bold mb-3 sm:mt-16">Contact</h2>
					<div class="flex flex-col w-1/2 sm:w-1/5 xl:w-40 mx-auto">
						<div
							class="grid h-2 card bg-primary rounded-box place-items-center"
						></div>
					</div>
				</div>
				<form id="contact-form" class="p-5">
					<div class="flex flex-col justify-center items-center gap-y-3">
						<div class="flex flex-col gap-y-3">
							<div class="flex flex-col gap-y-3">
								<label for="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									class="input input-primary input-bordered w-full"
									placeholder="e.g myemail@mail.com"
									required
								/>
							</div>
							<div class="flex flex-col gap-y-3">
								<label for="subject">Subject</label>
								<input
									type="text"
									name="subject"
									id="subject"
									class="input input-primary input-bordered w-full"
									placeholder="I want to ..."
									required
								/>
							</div>
						</div>
						<div class="flex flex-col gap-y-3">
							<label for="message">Message</label>
							<textarea
								class="textarea h-24 textarea-bordered textarea-primary"
								placeholder="Hallo Lucky ..."
								id="message"
							></textarea>
							<div class="mt-3">
								<button
									class="btn btn-primary rounded-full w-full"
									id="btn-send"
								>
									Send
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Contact",
	};
</script>
