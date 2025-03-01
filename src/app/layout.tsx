import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STN Money",
  description: "Sistema de controle financeiro pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} dark antialiased`}>{children}</body>
    </html>
  );
}
