import {Mulish } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${mulish.className}`}
      >
        {children}
      </body>
    </html>
  );
}
