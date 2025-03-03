import { ReactNode } from "react";
import { Header } from "@/components/layouts/header/header";
import { FooterWithoutForm } from "@/components/layouts/footerWithoutForm/footerWithoutForm";
import { api } from "@/common/api";

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const contactInfo = await api.getContacts();
  const socials = contactInfo?.social_links;

  return (
    <>
      <Header needContactButton={false} socials={socials || []} />
      {children}
      <FooterWithoutForm socials={socials || []} />
    </>
  );
}
