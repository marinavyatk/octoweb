import { Montserrat, Unbounded } from "next/font/google";

export const unbounded = Unbounded({
  subsets: ["cyrillic"],
  variable: "--unbounded",
  display: "auto",
  weight: ["200", "300", "400", "500", "600", "800", "900"],
});
export const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--montserrat",
  weight: ["300", "500"],
});
