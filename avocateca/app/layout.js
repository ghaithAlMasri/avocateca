import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avocateca",
  description: "Legea ta Frim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-hidden">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
