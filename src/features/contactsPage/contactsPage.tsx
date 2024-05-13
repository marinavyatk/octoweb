import s from "./contactsPage.module.scss";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import { Header } from "../../components/ui/complex/header/header.tsx";
import BaseMap from "../../assets/webp/baseMap.webp";

export const ContactsPage = () => {
  return (
    <div>
      <Header />
      <div className={s.mainContainer}>
        <h1>КОНТАКТЫ </h1>
        <div className={s.contacts}>
          <p>
            Пн-пт 10:00 — 18:00. <br /> г. Краснодар, ул. Атарбекова 7
          </p>
          <p>
            info@octoweb.ru <br /> +7 905 407-78-32
          </p>
        </div>
      </div>
      <div className={s.map}>
        <img src={BaseMap} alt="" />
      </div>
      <FooterWithForm />
    </div>
  );
};
