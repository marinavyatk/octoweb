import {Header} from '../../components/ui/complex/header/header.tsx';
import s from './mainPage.module.scss'
import {ButtonWithStroke} from '../../components/ui/primitive/buttonWithStroke/buttonWithStroke.tsx';
import {AnimatedField} from '../../components/ui/primitive/animatedField/animatedField.tsx';
import ArrowIcon from '../../assets/arrow.svg?react'
import team from '../../assets/webp/team.webp'
import {AdvantageCards} from '../../components/ui/complex/advantageCards/advantageCards.tsx';
import ArrowPointer from '../../assets/arrowPointer.svg?react'
import ArrowPointerSmall from '../../assets/arrowPointerSmall.svg?react'
import {DemarkoCard} from '../../components/ui/complex/caseCards/demarkoCard.tsx';
import {EkvadratCard} from '../../components/ui/complex/caseCards/ekvadratCard.tsx';
import {BotanicaCard} from '../../components/ui/complex/caseCards/botanicaCard.tsx';
import {SmxtreamCard} from '../../components/ui/complex/caseCards/smxtreamCard.tsx';
import {ServicesLinksList} from '../../components/ui/complex/servicesLinksList/servicesLinksList.tsx';
import {StepCards} from '../../components/ui/complex/stepCards/stepCards.tsx';
import {FooterWithForm} from '../../components/ui/complex/footerWithForm/footerWithForm.tsx';
import {routes} from '../../common/routes.ts';
import {ArrowLinkWithText} from '../../components/ui/primitive/ArrowLinkWithText/arrowLinkWithText.tsx';


export const MainPage = () => {
    return <div>
        <Header/>
        <div className={s.mainContainer}>

            <section className={s.greetingBlock}>
                <div className={s.mainText + ' ' + s.greetingText}>
                    <div>МЫ РЕВОЛЮЦИОНЕРЫ</div>
                    <div>В СФЕРЕ</div>
                    <ArrowPointerSmall className={s.arrow}/>
                    <div>ИЗ КРАСНОДАРА</div>
                </div>
                <div className={s.briefOffer}>
                    <ButtonWithStroke/>
                    <div className={s.offerText}>
                        <span className={s.heading}>Получите скидку <span
                            className={s.accent}>5000 рублей!</span></span>
                        <br/>
                        <span className={s.description}>Достаточно просто заполнить бриф</span>
                    </div>
                </div>
            </section>

            <section className={s.greetingDescription}>
                <h1>Создаем сайты для бизнеса</h1>
                <div>создаем</div>
                <AnimatedField variant={'secondary'}
                               animation={'right'}
                               className={s.starsSymbols}>
                    ★ ★ ★ ★ ★
                </AnimatedField>
                <div>сайты</div>
                <div>для</div>
                <AnimatedField variant={'dark'}
                               animation={'right'}
                               className={s.arrowSymbol}>
                    <ArrowIcon/>
                </AnimatedField>
                <div>бизнеса</div>
                <AnimatedField animation={'left'} className={s.happySymbol}> ⌢⌣</AnimatedField>
                <div>на</div>
                <AnimatedField animation={'left'} className={s.kaomojiSymbol}>くコ:彡</AnimatedField>
                <div>основе</div>
                <div>данных</div>
                <div>и</div>
                <div>здравого</div>
                <AnimatedField variant={'dark'} animation={'right'} className={s.emojiSymbol}>(:\/)</AnimatedField>
                <div>смысла</div>
                <AnimatedField variant={'secondary'} animation={'left'} className={s.kissSymbol}>:^*</AnimatedField>
            </section>
        </div>

        <section className={s.about}>
            <div className={s.text}>
                <h2>
                    ВЕБ-студия OCTOWEB <br/>
                </h2>
                <p> С 2018 года специализируемся на разработке, сопровождении и развитии IT-продуктов,
                    интернет-магазинов и бизнес-сайтов</p>
            </div>

            <div className={s.imageContainer}>
                <ArrowLinkWithText variant={'dark'}
                                   text={'Заказать проект'}
                                   href={'#form'}
                                   className={s.arrowButton}

                />
                <img src={team} alt={'Команда'}/>
            </div>
        </section>

        <div className={s.mainContainer}>
            <section className={s.advantages}>
                <h2>
                    ПОЧЕМУ <br/>МЫ?
                </h2>
                <ArrowPointer className={s.arrow}/>
                <span>くコ:彡</span>
                <span>くコ:彡</span>

                <AdvantageCards/>
            </section>
            <section className={s.cases}>
                <h2>КЕЙСЫ</h2>
                <DemarkoCard/>
                <EkvadratCard className={s.ekvadrat}/>
                <BotanicaCard/>
                <SmxtreamCard/>
                <ArrowLinkWithText text={'Больше кейсов'}
                                   to={routes.cases}/>
            </section>
        </div>

        <section className={s.services}>
            <h2>Услуги</h2>
            <ServicesLinksList/>
        </section>

        <section className={s.steps}>
            <StepCards/>
        </section>
        <FooterWithForm/>
    </div>
}