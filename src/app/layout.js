

import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minicursos",
  description: "Minicursos da Novo talento em um só lugar!",
};

export default function RootLayout({ children }) {

  return (
    <html className="" lang="en"> 
      <body className={inter.className}>{children}</body>
    </html>
  );
}
