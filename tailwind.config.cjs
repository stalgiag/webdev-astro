/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				green: '#B9FB9C'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				cabin: ['Cabin', 'sans-serif'],
			}
		},
	},
	plugins: [require('tailwind-children')],
}
