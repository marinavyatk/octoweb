import { GreetingDescription } from "@/components/layouts/greetingDescription/greetingDescription";
import { AboutCard } from "@/components/sections/aboutCard/aboutCard";
import { ServicesLinksList } from "@/components/sections/servicesLinksList/servicesLinksList";
import { StepCards } from "@/components/sections/stepCards/stepCards";
import s from "./page.module.scss";
import { Greeting } from "@/components/sections/greeting/greeting";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";
import { AdvantagesCards } from "@/components/sections/advantagesCards/advantagesCards";
import { Cases } from "@/components/sections/cases/cases";
import { api } from "@/common/api";


export default async function Home() {
  const [cases, services, stages] = await Promise.all([api.getCases(1, null), api.getServices(), api.getInteractionStages()])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const casesForSection = cases?.cases.splice(0, 4).map(({ imgFullWidth, projectCategories, ...rest }) => rest);
  const formattedServices = services?.map(serviceCategory => {
    return {
      number: serviceCategory.service_number,
      header: serviceCategory.title,
      mainLink: serviceCategory.url,
      image: serviceCategory.image,
      tags: serviceCategory.child_services.map(service => {
        return { text: service.title, subLink: service.serviceId };
      })
    };
  });

  const content = {
    firstLine: "МЫ РЕВОЛЮЦИОНЕРЫ",
    secondLine: "В СФЕРЕ",
    thirdLine: "ИЗ КРАСНОДАРА",
    wordSwipeProps: { words: ["web", "seo"] }
  };

  return (
    <div className={s.mainPage}>
      <div className={"mainContainer"}>
        <div className={s.mainBubblesContainer}>
          <BigBubble className={s.bigBubbleMain} />
          <SmallBubble className={s.smallBubbleMain} />
        </div>
        <Greeting textContent={content} />
        <h1 className={s.hiddenHeader}>Создаем сайты для бизнеса</h1>
        <GreetingDescription className={s.greetingDescription} />
      </div>
      <AboutCard className={s.about} />
      <AdvantagesCards />
      <div className={"mainContainer"}>
        <Cases cases={casesForSection || []}/>
      </div>
      <ServicesLinksList linksData={formattedServices || []} className={s.services} />
      <div className={s.servicesBubbles}>
        <SmallBubble className={s.smallBubbleServices} />
      </div>
      <StepCards className={s.steps} stepCards={stages}/>
    </div>
  );
};
