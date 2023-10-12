import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "button-codante":
                "linear-gradient(180deg, #E4E4E4 0%, #F7F7F7 100%)",
                "invalid-codante": "#BF0E0E",
                "valid-codante": "#1DB954",
                "accent-codante": "#4E9590",
                "brackets-codante": "#F2CAB8",
                "gray-codante": "#BFBFBF",
            },
        },
    },
    plugins: [],
};
export default config;
