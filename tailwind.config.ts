import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jet: "var(--jet)",
        onyx: "var(--onyx)",
        "eerie-black1": "var(--eerie-black1)",
        "eerie-black2": "var(--eerie-black2)",
        "smoky-black": "var(--smoky-black)",
        "white1": "var(--white1)",
        "white2": "var(--white2)",
        "orange-yellow-crayola": "var(--orange-yellow-crayola)",
        "vegas-gold": "var(--vegas-gold)",
        "light-gray": "var(--light-gray)",
        "light-gray70": "var(--light-gray70)",
        "bittersweet-shimmer": "var(--bittersweet-shimmer)",
      },
      fontFamily: {
        poppins: ["var(--ff-poppins)", "sans-serif"],
      },
      fontSize: {
        fs1: "var(--fs1)",
        fs2: "var(--fs2)",
        fs3: "var(--fs3)",
        fs4: "var(--fs4)",
        fs5: "var(--fs5)",
        fs6: "var(--fs6)",
        fs7: "var(--fs7)",
        fs8: "var(--fs8)",
      },
      fontWeight: {
        fw300: "var(--fw300)",
        fw400: "var(--fw400)",
        fw500: "var(--fw500)",
        fw600: "var(--fw600)",
      },
      boxShadow: {
        shadow1: "var(--shadow1)",
        shadow2: "var(--shadow2)",
        shadow3: "var(--shadow3)",
        shadow4: "var(--shadow4)",
        shadow5: "var(--shadow5)",
      },
      transitionTimingFunction: {
        transition1: "var(--transition1)",
        transition2: "var(--transition2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
