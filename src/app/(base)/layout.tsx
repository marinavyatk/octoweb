import { ReactNode } from "react";
import { Header } from "@/components/layouts/header/header";
import { FooterWithForm } from "@/components/layouts/footerWithForm/footerWithForm";
import { redirect } from "next/navigation";
import { api } from "@/common/api";
import { cookies } from "next/headers";


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
      <Header socials={socials || []} />
      <main className="main">
        {children}
        <div className={"overlay"}></div>
      </main>
      <FooterWithForm socials={socials || []} />
    </>
  );
}