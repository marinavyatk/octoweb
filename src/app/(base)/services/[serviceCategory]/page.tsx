import s from './serviceCategory.module.scss';
import {ButtonWithStroke} from '@/components/ui/buttons/buttonWithStroke/buttonWithStroke';
import ArrowPointerSmall from '@/svg/arrowPointerSmall.svg';
import {ServicesLinksList} from '@/components/layouts/servicesLinksList/servicesLinksList';
import {StepCards} from '@/components/layouts/stepCards/stepCards';
import {FAQ} from '@/components/layouts/faq/faq';
import {AdvantageSection} from '@/components/layouts/advantageSection/advantageSection';
import {CooperationCard} from '@/components/layouts/cooperationCard/cooperationCard';
import {linksData} from '@/common/componentsData/links';
import {faqData} from '@/common/componentsData/faq';


export default function ServiceCategory () {
  const mainHeader = {
    firstLine: "Разработка сайтов",
    secondLine: "для",
    thirdLine: "в Краснодаре",
    accent: "бизнеса",
  };

  return (
    <div>
      <div className={s.mainContainer}>
        <section className={s.greetingBlock}>
          <div className={s.mainText + " " + s.greetingText}>
            <div className={s.firstLine}>{mainHeader.firstLine}</div>
            <div className={s.secondLine}>
              {mainHeader.secondLine}{" "}
              <div className={s.headerAccent}>{mainHeader.accent}</div>
            </div>
            <ArrowPointerSmall className={s.arrow} />
            <div className={s.thirdLine}>{mainHeader.thirdLine}</div>
          </div>
          <div className={s.briefOffer}>
            <ButtonWithStroke />
            <div className={s.offerText}>
              <span className={s.heading}>
                Получите скидку <span className={s.accent}>5000 рублей!</span>
              </span>
              <br />
              <span className={s.description}>
                Достаточно просто заполнить бриф
              </span>
            </div>
          </div>
        </section>
      </div>

      <section className={s.services}>
        <h2>Услуги</h2>
        <ServicesLinksList linksData={linksData} />
      </section>
      <div className={s.mainContainer}>
        <AdvantageSection className={s.advantagesSection} />
      </div>
      <CooperationCard />
      <section className={s.steps}>
        <StepCards />
      </section>
      <div className={s.mainContainer}>
        <FAQ faqData={faqData} className={s.faq} />
      </div>
    </div>
  );
};
