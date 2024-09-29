import type { Config } from "tailwindcss";

export default {
   content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/components/*.tsx"],
   theme: {
      extend: {},
   },
   plugins: [],
} satisfies Config