import s from "./services.module.scss";
import { ServicesCard } from "@/components/layouts/servicesCard/servicesCard";
import { clsx } from "clsx";
import { BigBubble } from "@/components/video/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble";
import { api } from "@/common/api";
import { ChildService } from "@/common/types";
import Script from "next/script";
import { getMetaDataObj } from "@/common/commonFunctions";
import { cache } from "react";

const getCachedSeo = cache(async () => {
  return await api.getServicesSeo();
});

export async function generateMetadata() {
  const metadata = await getCachedSeo();
  if (!metadata) return {};

  return getMetaDataObj(metadata);
}

export default async function Services() {
  const [services, seo] = await Promise.all([
    api.getServices(),
    getCachedSeo(),
  ]);
  const schema = seo?.schema;
  const formattedTags = (tags: ChildService[]) => {
    return tags.map((tag) => {
      return {
        tag: tag.title,
        price: tag.cost,
        serviceId: tag.serviceId,
      };
    });
  };

  if (!services) return null;

  return (
    <>
      <div className={clsx(s.servicesPage, "mainContainer")}>
        <BigBubble className={s.bigBubble} />
        <SmallBubble className={s.smallBubble} />
        <h1>УСЛУГИ</h1>
        <div className={s.cardsContainer}>
          <div className={s.firstRow}>
            {services[0] && (
              <ServicesCard
                serviceCategory={services[0].url}
                number={services[0].service_number}
                header={services[0].title}
                tags={formattedTags(services[0].child_services)}
                size={"medium"}
                className={s.serviceCard}
              />
            )}
            {services[1] && (
              <ServicesCard
                serviceCategory={services[1].url}
                number={services[1].service_number}
                header={services[1].title}
                tags={formattedTags(services[1].child_services)}
                size={"small"}
                className={s.serviceCard}
              />
            )}
          </div>
          <div className={s.secondRow}>
            {services[2] && (
              <ServicesCard
                serviceCategory={services[2].url}
                number={services[2].service_number}
                header={services[2].title}
                tags={formattedTags(services[2].child_services)}
                size={"small"}
                className={s.serviceCard}
              />
            )}
            {services[3] && (
              <ServicesCard
                serviceCategory={services[3].url}
                number={services[3].service_number}
                header={services[3].title}
                tags={formattedTags(services[3].child_services)}
                size={"medium"}
                className={s.serviceCard}
              />
            )}
          </div>
        </div>
      </div>
      {schema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          id="services"
          strategy="beforeInteractive"
        ></Script>
      )}
    </>
  );
}
