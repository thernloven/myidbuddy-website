/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#F46C8B",
          soft: "#FCE3EA",
          deep: "#E0517A",
        },
        navy: "#1A2332",
        muted: "#8E929A",
        cloud: "#EEF0F2",
        sky: "#EAF2F8",
        land: "#DDE3EA",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -12px rgba(26,35,50,0.18)",
        card: "0 8px 24px -8px rgba(26,35,50,0.12)",
        glow: "0 18px 50px -12px rgba(244,108,139,0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
