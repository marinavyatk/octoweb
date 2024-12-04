import {ReactNode} from 'react';
import {Header} from '@/components/layouts/header/header';
import {FooterWithForm} from '@/components/layouts/footerWithForm/footerWithForm';
import { BigBubbleScene, Scene } from "@/components/3d/scene/scene";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <>
      <Header />
        {children}
        <Scene/>
        <BigBubbleScene/>
      <FooterWithForm />
</>
  );
}
