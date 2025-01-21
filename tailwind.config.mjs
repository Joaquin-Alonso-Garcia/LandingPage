/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        playwrite: ['Playwrite IN', 'sans-serif'], // Add the custom font
      },
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui"),
	],
}
