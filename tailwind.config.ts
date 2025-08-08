import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				fredoka: ['Fredoka', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				
				// Cute Clock Colors
				'clock-face': 'hsl(var(--clock-face))',
				'clock-text': 'hsl(var(--clock-text))',
				'clock-shadow': 'hsl(var(--clock-shadow))',
				'cute-pink': 'hsl(var(--cute-pink))',
				'cute-lavender': 'hsl(var(--cute-lavender))',
				'cute-mint': 'hsl(var(--cute-mint))',
				'cute-peach': 'hsl(var(--cute-peach))',
				'cute-yellow': 'hsl(var(--cute-yellow))',
				'button-primary': 'hsl(var(--button-primary))',
				'button-hover': 'hsl(var(--button-hover))',
				'pause-bg': 'hsl(var(--pause-bg))',
				'pause-text': 'hsl(var(--pause-text))',
				'pause-accent': 'hsl(var(--pause-accent))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'gentle-pulse': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.02)', opacity: '0.9' }
				},
				'popup-bounce': {
					'0%': { transform: 'translate(-50%, -50%) scale(0.3)', opacity: '0' },
					'50%': { transform: 'translate(-50%, -50%) scale(1.05)', opacity: '0.8' },
					'100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' }
				},
				'clock-tick': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.02)' },
					'100%': { transform: 'scale(1)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
				'popup-bounce': 'popup-bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'clock-tick': 'clock-tick 1s ease-in-out',
				'wiggle': 'wiggle 0.5s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
