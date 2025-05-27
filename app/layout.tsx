import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../components/Home/NavBar/ResponsiveNav";

const font = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Software Codevance",
  description: "Software Landin Page using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        
      </body>
    </html>
  );
}
