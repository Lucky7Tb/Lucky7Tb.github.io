const mix = require('laravel-mix');

mix
	.setPublicPath('dist')
	.before(() => {
		mix.copy('src/index.html', 'dist');
		mix.copyDirectory('src/img', 'dist/img');
	})
	.css('src/css/style.css', 'css')
	.css('src/css/hover.css', 'css')
	.js('src/js/app.js', 'js')
	.postCss('src/css/style.css', 'css', [require('tailwindcss')]);