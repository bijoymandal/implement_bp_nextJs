import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HealthCare Dashboard - 2024 FED API Skills Test",
  description: "Modern healthcare analytics dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar />
            <div>{children}</div>
      </body>
    </html>
  );
}

