import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Aryan Bajpai" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} flex flex-col items-center justify-center mx-auto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HeroUIProvider>
            {children}
          </HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
