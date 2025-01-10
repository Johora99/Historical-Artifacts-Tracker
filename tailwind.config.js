/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			CharcoalGreen: 'rgb(2, 11, 13)',
  			TealBlueGreen: 'rgb(20, 133, 135)',
  			DeepSeaGreen: 'rgb(0, 22, 24)',
  			LightBlue: 'rgb(221, 232, 248)',
  			VividBlue: 'rgb(0, 133, 209)',
  			MediumGreen: 'rgb(101, 189, 124)',
  			LightMintGreen: 'rgb(225, 242, 229)',
  			LightPastelYellow: 'rgb(254, 242, 217)',
  			BrightOrangeYellow: 'rgb(250, 184, 40)',
  			LightGray: 'rgb(179, 179, 179)',
  
  		},
  		animation: {
  			zoom: 'zoomInOut 7s ease-in-out infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
  		},
  		keyframes: {
  			zoomInOut: {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.2)'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			}
  		},
  	}
  },
  plugins: [
    require('daisyui'),
  
],
}

