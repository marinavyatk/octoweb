import { ReactNode } from "react";
import { Header } from "@/components/layouts/header/header";
import { FooterWithForm } from "@/components/layouts/footerWithForm/footerWithForm";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <>
      <Header />
        {children}
      <FooterWithForm />
</>
  );
}
