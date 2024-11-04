import s from "./service.module.scss";
import { Team } from "@/components/layouts/team/team";
import { StepCards } from "@/components/layouts/stepCards/stepCards";
import { FAQ } from "@/components/layouts/faq/faq";
import ArrowIconForPrices from "@/svg/arrow4.svg";
import { AudienceCard } from "@/components/layouts/audienceCard/audienceCard";
import { PriceTable } from "@/components/layouts/priceTable/priceTable";
import { CooperationCard } from "@/components/layouts/cooperationCard/cooperationCard";
import { AdvantageSection } from "@/components/layouts/advantageSection/advantageSection";
import { serviceData } from "@/common/componentsData/service";
import { faqData } from "@/common/componentsData/faq";
import Image from "next/image";
import { ArrowButtonWithText } from "@/components/ui/buttons/ArrowButtonWithText/arrowButtonWithText";


export default function Service() {
  return (
    <div className={s.servicePage}>
      <div className={'mainContainer'}>
        <h1>{serviceData.serviceName}</h1>
        <div className={s.discussProject}>
          <p>{serviceData.description}</p>
          <ArrowButtonWithText
            text={"ОБСУДИТЬ ПРОЕКТ"}
            as={"a"}
            href={"#form"}
            className={s.arrowLink}
          />
        </div>
        <div className={s.serviceImg}>
          <Image src={"/onlineStoreImg.webp"} alt={""} fill sizes={'100vw'} priority/>
        </div>
        <div className={s.aboutService}>
          <h2>ОБ УСЛУГЕ</h2>
          <div className={s.container}>
            <p>{serviceData.aboutService}</p>
            <ArrowButtonWithText
              as={"a"}
              text={"Консультация"}
              className={s.arrow}
              href={"#form"}
            />
          </div>
        </div>
      </div>
      <CooperationCard />
      <div className={'mainContainer'}>
        <AdvantageSection />
        <AudienceCard
          header={serviceData.audience.header}
          items={serviceData.audience.items}
          className={s.audience}
        />
        <Team
          teamMembersInfo={serviceData.team.teamMembersInfo}
          intro={serviceData.team.intro}
          className={s.team}
        />
      </div>
      <StepCards className={s.stepCards} />
      <section className={s.prices}>
        <div className={s.container}>
          <div className={s.cost}>
            Стоимость <br/>от <span className={s.price}>{serviceData.cost} ₽</span>
          </div>
          <ArrowButtonWithText
            as={"a"}
            text={"Обсудить проект"}
            className={s.arrow}
            href={"#form"}
          />
        </div>
        <div className={s.backgroundContainer}>
          <div className={s.background}></div>
        </div>
        <div className={s.additionalServices}>
          <h2>
            ДОПОЛНИТЕЛЬНЫЕ <br /> УСЛУГИ
          </h2>
          <ArrowIconForPrices className={s.arrow} />
          <PriceTable priceItems={serviceData.priceTable} />
        </div>
      </section>
      <div className={'mainContainer'}>
        <FAQ className={s.faq} faqData={faqData} />
      </div>
    </div>
  );
};
