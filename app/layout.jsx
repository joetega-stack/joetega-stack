import { Google_Sans_Flex, Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/contexts/appContext";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const googleSans = Google_Sans_Flex({
  variable: "--font-google-sans",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const value = {user: null}
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${googleSans.variable}`}
      >
        <Provider value={value}>{children}</Provider>
      </body>
    </html>
  );
}
