import {  Poppins } from "next/font/google";
import "./globals.css";
import TopUpButton from "@/components/TopUpButton/TopUpButton";
import Whatsapp from "@/components/Whatsapp/Whatsapp";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import BrochureButton from "@/components/BrochureButton/BrochureButton";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "Sunbless Solar System",
  description: "Solar Service Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased`}
      >
        <Navbar/>
        {children}
        <TopUpButton />
        <Whatsapp />
        {/* <BrochureButton/> */}
        <Footer/>
      </body>
    </html>
  );
}
