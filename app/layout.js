import { Mulish } from "next/font/google";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Covan – Cosmetics Nextjs Theme – Just another Nextjs site",
  description: "Covan – Cosmetics Nextjs Theme – Just another Nextjs site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className} overflow-x-hidden`}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
