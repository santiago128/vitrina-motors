import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitrina Motors",
  description: "Tu próximo carro está aquí",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geist.className} bg-gray-950 text-white`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}