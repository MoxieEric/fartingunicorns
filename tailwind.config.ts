import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				unicorn: {
					50: '#c4e9de', // light blue / hooves
					100: '#f17cab', // pink / hair
					200: '#6ccad9', // cyan / hair
					300: '#f9d400', // yellow / horn
					400: '#2c4362', // dark / outline
					500: '#2b4161', // dark blue / outline
					800: '#2b4161',
					950: '#2b4161',
				},
			},
			fontFamily: {
				sans: [
					'"Inter"',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
				cherry: '"Cherry Bomb One", system-ui',
			},
		},
	},
	plugins: [],
} satisfies Config
