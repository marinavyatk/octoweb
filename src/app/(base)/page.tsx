import {GreetingText} from '@/components/layouts/greetingText/greetingText';
import {BriefOffer} from '@/components/layouts/briefOffer/briefOffer';
import {GreetingDescription} from '@/components/layouts/greetingDescription/greetingDescription';
import {AboutCard} from '@/components/layouts/aboutCard/aboutCard';
import {AdvantageCards} from '@/components/layouts/advantageCards/advantageCards';
import {CaseCard, Size} from '@/components/layouts/caseCard/caseCard';
import {linksData, ServicesLinksList} from '@/components/layouts/servicesLinksList/servicesLinksList';
import {StepCards} from '@/components/layouts/stepCards/stepCards';
import s from './page.module.scss';
import ArrowPointerSmall from '@/svg/arrowPointerSmall.svg';
import {routes} from '@/common/routes';
import {ArrowLinkWithText} from '@/components/ui/buttons/ArrowLinkWithText/arrowLinkWithText';
import {mainPageCases} from '@/common/componentsData/mainPageCases';


export default function Home() {
//
    return (
        <div className={s.mainPage}>
            <div className={s.mainContainer}>
                <section className={s.greetingBlock}>
                    <div className={s.greetingText}>
                        <GreetingText/>
                        <ArrowPointerSmall className={s.arrow}/>
                    </div>
                    <BriefOffer className={s.briefOffer}/>
                </section>
                <section className={s.greetingDescription}>
                    <h1>Создаем сайты для бизнеса</h1>
                    <GreetingDescription/>
                </section>
            </div>
            <section className={s.about}>
                <AboutCard/>
            </section>
            <div className={s.mainContainer}>
                <section className={s.advantages}>
                    <h2>ПОЧЕМУ МЫ?</h2>
                    <div className={s.arrow}></div>
                    <span>くコ:彡</span>
                    <span>くコ:彡</span>
                    <div className={s.advantagesCards}>
                        <AdvantageCards/>
                    </div>
                </section>
                <section className={s.cases}>
                    <h2>КЕЙСЫ</h2>
                    <CaseCard as={'h3'} size={'extraLarge' as Size} {...mainPageCases[0]} />
                    <CaseCard
                        as={'h3'}
                        size={'large' as Size}
                        {...mainPageCases[1]}
                        className={s.secondCard}
                    />
                    <CaseCard as={'h3'} size={'small' as Size} {...mainPageCases[2]} />
                    <CaseCard
                        as={'h3'}
                        size={'medium' as Size}
                        {...mainPageCases[3]}
                        className={s.fourCard}
                    />
                    <ArrowLinkWithText text={'Больше кейсов'} to={routes.cases} className={s.arrowLink}/>
                </section>
            </div>
            <section className={s.services}>
                <h2>Услуги</h2>
                <ServicesLinksList linksData={linksData}/>
            </section>
            <section className={s.steps}>
                <StepCards/>
            </section>
        </div>
    );
};
