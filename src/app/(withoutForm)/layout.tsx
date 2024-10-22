import {ReactNode} from 'react';
import {Header} from '@/components/layouts/header/header';
import {FooterWithoutForm} from '@/components/layouts/footerWithoutForm/footerWithoutForm';


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <>
      <Header />
        {children}
      <FooterWithoutForm />
</>
  );
}
