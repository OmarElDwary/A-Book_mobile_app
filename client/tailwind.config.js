/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#22D3EE',
        background: '#F9FAFB',
        surface: '#FFFFFF',
        text: '#111827',
        muted: '#6B7280',
        success: '#10B981',
        warning: '#FBBF24',
        danger: '#EF4444',
      },
    },
  },
  plugins: [],
}