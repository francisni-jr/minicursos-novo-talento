import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Novo Talento",
  description: "Startando um projeto incrível",
  icon: "https://res.cloudinary.com/dtdz4se00/image/upload/v1713475087/Marca_PNG_tpcpob.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
