import s from './contacts.module.scss';
import Map from '@/components/layouts/map/map';

export default function Contacts (){
  return (
    <div className={s.contactsPage}>
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
      </div>
    </div>
  );
};
