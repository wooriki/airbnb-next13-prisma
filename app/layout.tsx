import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

import Navbar from "./component/navbar/Navbar";
import ClientOnly from "./component/ClientOnly";
import RegisterModal from "./component/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata: Metadata = {
  title: "AirBnb",
  description: "Airbnb clone",
};
const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
