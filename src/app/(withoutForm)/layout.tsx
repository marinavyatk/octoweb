"use client";

import { ReactNode, useEffect } from "react";
import { Header } from "@/components/layouts/header/header";
import { FooterWithoutForm } from "@/components/layouts/footerWithoutForm/footerWithoutForm";
import { redirect } from "next/navigation";


export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: ReactNode;
}>) {

  useEffect(() => {
    const isAuthorized = localStorage.getItem("isAuthorized");

    if (!isAuthorized) {
      redirect("/under-construction");
    }
  }, []);

  return (
    <>
      <Header needContactButton={false} />
      {children}
      <FooterWithoutForm />
    </>
  );
}
