import { pixelBasedPreset, type TailwindConfig } from "react-email";

const emailTailwindConfig = {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#dd2721",
          ink: "#101828",
          body: "#344054",
          muted: "#667085",
          line: "#d0d5dd",
          soft: "#fffafa",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
      },
    },
  },
} satisfies TailwindConfig;

export default emailTailwindConfig;
