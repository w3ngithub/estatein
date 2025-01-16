import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/svgs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "desktop-2xl": "1920px",
      "desktop-lg": "1440px",
      "desktop-md": "1200px",
      "tablet-lg": "996px",
      "tablet-md": "882px",
      "tablet-sm": "768px",
      "mobile-xl": "640px",
      "mobile-lg": "524px",
      "mobile-md": "420px",
      "mobile-extra-md": "373px", //only for customers card
      "mobile-sm": "360px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        desktop: "1440px",
        "mobile-sm": "100%",
      },
    },
    extend: {
      textColor: {
        DEFAULT: "#FFFFFF",
      },
      colors: {
        black: "#000",
        "purple-shade": {
          60: "#703BF7",
          65: "#1A64FF",
          70: "#FF9533",
          90: "#FFE4CC",
          95: "#FFF1E5",
          97: "#FFF7F0",
          d60: "#562CBF",
        },
        white: {
          DEFAULT: "#FFF",
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
          d1: "#E4E4E7",
        },
        "grey-shade": {
          8: "#141414",
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          30: "#4D4D4D",
          40: "#666666",
          50: "#808080",
          60: "#999999",
          d61: "#191919",
          d62: "#303030",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "custom-gradient-purple":
          "linear-gradient(135deg, rgba(112, 59, 274, 0.75) 0%, rgba(0, 0, 0, 0.1) 12%)",
        "service-banner": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/service-page-unlock-property-banner.png)`,
        "smart-banner": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/service-page-unlock-property-banner.png)`,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
