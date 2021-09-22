import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

document.addEventListener('DOMContentLoaded', function () {
	// Project Section Tab
	const webTab = document.getElementById('web-tab');
	const webContent = document.getElementById('web-content');

	const mobileTab = document.getElementById('mobile-tab');
	const mobileContent = document.getElementById('mobile-content');

	mobileTab.addEventListener('click', function (event) {
		event.preventDefault();
		mobileContent.classList.remove('hidden');
		mobileContent.classList.add('flex');

		webContent.classList.remove('flex');
		webContent.classList.add('hidden');

		webTab.classList.remove('tab-active', 'tab-lifted');
		mobileTab.classList.add('tab-active', 'tab-lifted');
	});

	webTab.addEventListener('click', function (event) {
		event.preventDefault();
		webContent.classList.remove('hidden');
		webContent.classList.add('flex');

		mobileContent.classList.remove('flex');
		mobileContent.classList.add('hidden');

		mobileTab.classList.remove('tab-active', 'tab-lifted');
		webTab.classList.add('tab-active', 'tab-lifted');
	});

	// Email form
	const emailField = document.getElementById('email');
	const messageField = document.getElementById('message');
	const buttonSend = document.getElementById('btn-send');
	const contactForm = document.getElementById('contact-form');
	const regexEmail = /^[\w\.\-_]{1,}@[\w\.\-]{6,}/;
	const notyf = new Notyf({
		dismissible: true,
		position: {
			x: 'right',
			y: 'top'
		}
	});
	let data;
	buttonSend.addEventListener('click', function (event) {
		event.preventDefault();
		if (emailField.value != '' && messageField.value != '') {
			if (regexEmail.test(email.value)) {
				data = new FormData(contactForm);
				buttonSend.classList.remove('btn-primary');
				buttonSend.classList.add('btn-disabled', 'loading');
				fetch(event.target.action, {
					method: 'POST',
					body: data,
					headers: {
						Accept: 'application/json',
					},
				})
					.then(() => {
						notyf.success('Berhasil mengirim pesan');
						contactForm.reset();
					})
					.catch(() => {
						notyf.error('Oops! Gagal mengirim pesan. Silahkan coba lagi nanti');
					})
					.finally(() => {
						buttonSend.classList.remove('btn-disabled', 'loading');
						buttonSend.classList.add('btn-primary');
					});
			} else {
				notyf.error('Harap masukan email yang valid');
			}
		} else {
			notyf.error('Email dan pesan tidak boleh kosong');
		}
	});

	// Copy Right
	const date = new Date();
	document.getElementById('year').innerHTML = date.getFullYear();
});
