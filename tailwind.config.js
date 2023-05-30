/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Primary
                "tomato": "hsl(4, 100%, 67%)",

                // Neutral
                "dark-slate-grey": "hsl(234, 29%, 20%)",
                "charcoal-grey": "hsl(235, 18%, 26%)",
                "grey": "hsl(231, 7%, 60%)",
                "white": "hsl(0, 0%, 100%)",
            },
            fontFamily: {
                "Roboto": ['Roboto', 'arial', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
