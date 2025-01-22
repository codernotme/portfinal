import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollerAnimation from "@/components/ScrollAnimationWrapper";
import {HeroUIProvider} from "@heroui/react";

// Import the font with specific weights
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

// RootLayout component to wrap the app
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HeroUIProvider>
          <ScrollerAnimation/>
          {children}
          </HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
