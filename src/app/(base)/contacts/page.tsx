import s from "./contacts.module.scss";
import Map from "@/components/layouts/map/map";
import { ContactLinks } from "@/components/layouts/contactLinks/contactLinks";

export default function Contacts() {
  return (
    <div className={s.contactsPage}>
      <div className={"mainContainer"}>
        <h1>КОНТАКТЫ </h1>
        <div className={s.contacts}>
          <div>
            Пн-пт 10:00 — 18:00. <br />
            <address>
              г. Краснодар, ул.&nbsp;Атарбекова&nbsp;7
            </address>
          </div>

          <div className={s.links}>
            <a href="mailto:info@octoweb.ru">info@octoweb.ru</a>
            <a href="tel:+79054077832">+7 905 407-78-32</a>
          </div>
        </div>
        <ContactLinks className={s.contactLinks}/>
      </div>
        <Map className={s.map}/>
    </div>
  );
};
