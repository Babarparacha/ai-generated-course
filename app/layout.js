import { Outfit } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  GoogleOneTap} from '@clerk/nextjs'
export const metadata = {
  title: "AI Generated Course",
  description: "Generated Course with the help of AI",
};

// Correctly invoking the Outfit font
const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <GoogleOneTap/>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
