import { Poppins, Lato, Fira_Code, Mulish } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400"],
});

export const mulish = Mulish({
  subsets: ["latin-ext"],
});