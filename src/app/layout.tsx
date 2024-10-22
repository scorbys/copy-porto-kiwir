import type { Metadata } from "next";
import { Inter, Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./component/home/navbar";
import Footer from "./component/home/footer";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className={nunito_sans.className}>
          <Navbar />
        </div>
        <div className={montserrat.className}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
