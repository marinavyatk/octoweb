import s from "./contactsPage.module.scss";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import { Header } from "../../components/ui/complex/header/header.tsx";
import Map from "../../components/ui/primitive/map/map.tsx";
import { useEffect } from "react";

export const ContactsPage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className={s.contactsPage}>
      <Header />
      <div className={s.contactsPageContent}>
        <div className={s.mainContainer}>
          <h1>КОНТАКТЫ </h1>
          <div className={s.contacts}>
            <p>
              Пн-пт 10:00 — 18:00. <br />
              г. Краснодар, <span>ул. Атарбекова 7</span>
            </p>
            <p>
              info@octoweb.ru <br /> +7 905 407-78-32
            </p>
          </div>
        </div>
        <div className={s.map}>
          <Map />
        </div>
        <FooterWithForm />
      </div>
    </div>
  );
};
