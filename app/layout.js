import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "myIDBuddy — Find your standby crew",
  description:
    "The app for ID & standby travelers. See who's flying where, join trips, check staff-travel loads, and connect with verified travel buddies.",
  verification: {
    google: "5hMbXXs69h3aOlannWCizWBlcgD71hyyPjpBPBsB-fU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
