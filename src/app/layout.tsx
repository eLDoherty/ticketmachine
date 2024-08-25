import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Navbar from "./navbar";
import Sparkles from "./component/Sparkle";
import Rocket from "./component/Rocket";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket Machine",
  description: "Event and concert ticketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " sparkle-background"}>
        <Sparkles />
        <Rocket />
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
