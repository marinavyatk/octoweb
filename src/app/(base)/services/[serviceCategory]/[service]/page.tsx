import s from "./service.module.scss";
import { Team } from "@/components/sections/team/team";
import { StepCards } from "@/components/sections/stepCards/stepCards";
import { FAQ } from "@/components/sections/faq/faq";
import ArrowIconForPrices from "@/svg/arrow4.svg";
import { AccentTable } from "@/components/layouts/accentTable/accentTable";
import { PriceTable } from "@/components/layouts/priceTable/priceTable";
import { CooperationCard } from "@/components/sections/cooperationCard/cooperationCard";
import { Button } from "@/components/ui/buttons/button/button";
import { Advantages } from "@/components/sections/advantages/advantages";
import { Picture } from "@/components/ui/picture/picture";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";
import { api } from "@/common/api";


export default async function Service({ params }: {
  params: Promise<{ service: string }>
}) {
  const { service } = await params;
  const serviceInfo = await api.getService(service);
  if (!serviceInfo) return null;

  const stepCards = Object.entries(serviceInfo.work_stages)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([stepNumber, { title, text }]) => ({ stepNumber: stepNumber, header: title, description: text }));


  return (
    <div className={s.servicePage}>
      <div className={s.bubblesMain}>
        <BigBubble className={s.bigBubbleMain} />
        <SmallBubble className={s.smallBubbleMain} />
      </div>
      <div className={"mainContainer"}>
        <h1>{serviceInfo.full_name}</h1>
        <div className={s.discussProject}>
          <div className={s.description} dangerouslySetInnerHTML={{ __html: serviceInfo["first_description"] }}></div>
          <Button
            text={"ОБСУДИТЬ ПРОЕКТ"}
            as={"a"}
            href={"#form"}
            className={s.arrowLink}
          />
        </div>
        <Picture
          src={serviceInfo.image}
          alt={""}
          fill
          sizes={"100vw"}
          priority
          containerProps={{ className: s.serviceImg }} />
        <div className={s.aboutService}>
          <h2>ОБ УСЛУГЕ</h2>
          <div className={s.serviceContainer}>
            <div className={s.description} dangerouslySetInnerHTML={{ __html: serviceInfo.content }}></div>
            <Button
              as={"a"}
              text={"Консультация"}
              href={"#form"}
            />
          </div>
        </div>
      </div>
      <CooperationCard />
      <div className={"mainContainer"}>
        <div className={s.bubblesAdvantages}>
          <BigBubble className={s.bigBubbleAdvantages} />
        </div>
        <Advantages />
        <AccentTable
          header={serviceInfo.for_whom_title}
          items={serviceInfo.for_whom}
          className={s.table}
        />
        <div className={s.bubblesTable}>
          <SmallBubble className={s.smallBubbleTable} />
        </div>
        <Team
          teamMembersInfo={serviceInfo.team}
          intro={serviceInfo.team_text}
          className={s.team}
        />
      </div>
      <StepCards className={s.stepCards} stepCards={stepCards}/>
      <section className={s.prices}>
        <div className={s.pricesContainer}>
          <div className={s.cost}>
            Стоимость <br />от <span className={s.price}>{serviceInfo.cost} ₽</span>
          </div>
          <Button
            as={"a"}
            text={"Обсудить проект"}
            href={"#form"}
          />
          <div className={s.background}></div>
        </div>
        <div className={s.bubblesPrices}>
          <BigBubble className={s.bigBubblePrices} />
        </div>
        <div className={s.additionalServices}>
          <h2>
            ДОПОЛНИТЕЛЬНЫЕ <br /> УСЛУГИ
          </h2>
          <ArrowIconForPrices className={s.arrow} />
          <PriceTable priceItems={serviceInfo.additional_services} />
        </div>
      </section>
      <div className={"mainContainer"}>
        <FAQ className={s.faq} faqData={serviceInfo.faq} />
      </div>
    </div>
  );
};
