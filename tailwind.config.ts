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
                brand: {
                    teal: "#38B29B",
                    navy: "#1B2430", // Professional Deep Navy, not Space Black
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            }
        },
    },
    plugins: [],
};
export default config;
