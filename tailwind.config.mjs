/** @type {import('tailwindcss').Config} */
export default {
	purge: {enabled: true, content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'spin_slow': 'spin 4s linear infinite',
			  }
		},
	},
	plugins: [],
}
