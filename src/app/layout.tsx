import "../styles/index.scss";
import { clsx } from "clsx";
import { ReactNode } from "react";
import { montserrat, unbounded } from "@/app/fonts/fonts";
import { PageLoader } from "@/components/ui/linearLoader/pageLoader";
import { Metadata } from "next";
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";
import { Scripts } from "@/common/scripts";
import { ToastContainer } from "react-toastify";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: {
    default: "Веб-студия Octoweb",
  } as TemplateString,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  console.log("Push check 4");
  return (
    <html lang="ru" className={clsx(unbounded.variable, montserrat.variable)}>
      <head>
        <meta name="yandex-verification" content="95ff48d9d265e496" />
        <meta
          name="google-site-verification"
          content="XkW01Etlnf_YfOjAl88IWB6pZv0HX1ufldP2mTJ5qiY"
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/100000079"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body>
        <PageLoader />
        {children}
        <ToastContainer
          position="bottom-left"
          theme="colored"
          autoClose={10000}
        />
        <Scripts />
      </body>
    </html>
  );
}
