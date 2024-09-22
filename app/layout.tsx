import { Nunito } from "next/font/google";

import "./globals.css";

import Navbar from "./component/navbar/Navbar";
import ClientOnly from "./component/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

import LoginModal from "./component/modals/LoginModal";
import RegisterModal from "./component/modals/RegisterModal";
import RentModal from "./component/modals/RentModal";

export const metadata = {
  title: "AirBnb",
  description: "Airbnb clone",
};
const font = Nunito({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
