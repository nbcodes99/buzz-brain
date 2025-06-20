import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import LenisProvider from "./context/LenisProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuzzBrain",
  description:
    "A fun and interactive quiz app to test your knowledge with engaging trivia questions.",
  icons: {
    icon: "/buzzbrain.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Theme appearance="dark" accentColor="orange" grayColor="mauve">
          <main>
            <LenisProvider>{children}</LenisProvider>
          </main>
          {/* <ThemePanel /> */}
        </Theme>
        <Footer />
      </body>
    </html>
  );
}
