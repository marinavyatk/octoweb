import { ReactNode } from "react";
import { Header } from "@/components/layouts/header/header";
import { FooterWithoutForm } from "@/components/layouts/footerWithoutForm/footerWithoutForm";
import { api } from "@/common/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  const cookieStore = cookies();
  const isAuthorized = cookieStore.get("isAuthorized");
  if (!isAuthorized) {
    redirect("/under-construction");
  }

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
