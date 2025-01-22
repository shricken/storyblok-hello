/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
				'solid-amber': '5px -5px 0 #fbe6d0',
			},
			colors: {
				'amber': '#bd660f',
				'light-amber': '#fbe6d0',
				'brick': '#932525',
				'light-brick': '#f5d6d6',
			},
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
	safelist: ['bg-light-amber', 'bg-light-brick', 'text-4xl']
}
