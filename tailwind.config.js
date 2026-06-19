/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js, ts, jsx, tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <-- Isso impede o Tailwind de resetar o seu CSS existente
  }
}
