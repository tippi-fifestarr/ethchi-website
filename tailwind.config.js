/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primaryBrand': '#E41E2D',
      'primaryBackground': '#04293C',
      'secondaryBrand': '#77C5E0',
      'tertiaryBrand': '#FF808A',
      'primaryType': '#FFFFFF'
    },
    extend: {
      backgroundImage: {
        'homepage_bg': "url('https://images.unsplash.com/photo-1509653087866-91f6c2ab59f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80')",
        'ticket_page_bg': "url('../public/images/ethchi_flag_big.jpg')",
      }
    },
  },
  plugins: [],
}

