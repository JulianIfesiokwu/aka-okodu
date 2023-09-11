/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      main: ["Open Sans", "sans-serif"],
      title: ["Ubuntu", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        enquiry: "url('/src/assets/contact-hero.jpg')",
        members: "url('/src/assets/member-hero.jpg')",
        home: "url('/src/assets/home-hero.jpg')",
      },
    },
  },
  plugins: [],
};
