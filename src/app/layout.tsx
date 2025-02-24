import "../styles/index.scss";
import {clsx} from "clsx";
import {ReactNode} from "react";
import {montserrat, unbounded} from "@/app/fonts/fonts";
import {PageLoader} from "@/components/ui/linearLoader/pageLoader";
import {ToastContainer} from "react-toastify";
import YandexMetrika from "@/common/ymScript";


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="ru" className={clsx(unbounded.variable, montserrat.variable)}>
    <head>
      <meta name="yandex-verification" content="95ff48d9d265e496"/>
      <meta name="google-site-verification" content="XkW01Etlnf_YfOjAl88IWB6pZv0HX1ufldP2mTJ5qiY"/>
      <noscript>
        <div>
          <img
              src="https://mc.yandex.ru/watch/100000079"
              style={{position: "absolute", left: "-9999px"}}
              alt=""
          />
        </div>
      </noscript>
    </head>
    <body>
    <PageLoader/>
    {children}
    <script src="https://www.google.com/recaptcha/api.js?render=6Le0rM0qAAAAAIF-8ZPeA5_0RThCMWK1E_PIiv6c"
            async></script>
    <ToastContainer position="bottom-left" theme="colored" autoClose={10000}/>
    <YandexMetrika/>
    </body>
    </html>
  );
}
