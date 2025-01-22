/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				wave: 'wave 1.5s ease-in-out infinite',
			  },
			keyframes: {
				wave: {
				  '0%, 100%': { transform: 'rotate(-2deg)' },
				  '50%': { transform: 'rotate(2deg)' },
				}
			  }
		},
	},
	plugins: [],
}
