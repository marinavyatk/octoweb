import s from "./contacts.module.scss";
import Map from "@/components/layouts/map/map";
import { ContactLinks } from "@/components/layouts/contactLinks/contactLinks";
import { api } from "@/common/api";
import { formatPhoneNumber } from "@/common/commonFunctions";

export default async function Contacts() {
  const contactInfo = await api.getContacts();

  if(!contactInfo) return null;

  return (
    <div className={s.contactsPage}>
      <div className={"mainContainer"}>
        <h1>КОНТАКТЫ </h1>
        <div className={s.contacts}>
          <div>
            {contactInfo?.working_hours}<br />
            <address>
              {contactInfo?.address}
            </address>
          </div>
          <div className={s.links}>
            <a href={`mailto:${contactInfo?.email}`}>{contactInfo?.email}</a>
            <a href={contactInfo?.phone && `tel:${formatPhoneNumber(contactInfo.phone)}`}>{contactInfo?.phone}</a>
          </div>
        </div>
        {contactInfo?.social_links &&
          <ContactLinks socials={contactInfo.social_links}
                        className={s.contactLinks}
                        containerProps={{ className: s.contactLinksContainer }}
          />}
      </div>
      <Map className={s.map}
           locationCoordinates={contactInfo?.map_place_coordinates}
           markerCoordinates={contactInfo?.map_coordinates}
      />
    </div>
  );
};
