module.exports = {
  mode: 'jit',
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        body_background: "#0e0e0e",
        color_logo: "#ff5b50",
        card_color: "#252525",
        subtitle_color: "#5a5757",
        color_input: "#0D0D0D"
      }
    }
  },
  plugins: []
}
