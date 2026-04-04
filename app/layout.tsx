import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";

export const metadata: Metadata = {
  title: "SEP Projetos 3D | Impressão 3D Personalizada",
  description: "Lembrancinhas, brindes, decorações, chaveiros e kits personalizados para festas, casamentos e empresas — feitos sob medida, entregues com precisão.",
  keywords: "impressão 3D, brindes personalizados, lembrancinhas, casamento, festas, decoração 3D",
  openGraph: {
    title: "SEP Projetos 3D | Impressão 3D Personalizada",
    description: "Transformamos ideias em objetos reais com tecnologia de ponta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
