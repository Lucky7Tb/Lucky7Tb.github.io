module.exports = {
	purge: ['./src/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'emerald', // and some pre-defined theme
			'forest',
		],
	},
};
