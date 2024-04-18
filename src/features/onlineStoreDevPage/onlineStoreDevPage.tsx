import s from './onlineStoreDevPage.module.scss'
import {Header} from '../../components/ui/complex/header/header.tsx';
import {FooterWithForm} from '../../components/ui/complex/footerWithForm/footerWithForm.tsx';
import {ArrowButtonWithText} from '../../components/ui/primitive/arrowButtonWithText/arrowButtonWithText.tsx';
import OnlineStoreImg from '../../assets/webp/onlineStoreImg.webp'
import {AnimatedField} from '../../components/ui/primitive/animatedField/animatedField.tsx';
import ArrowIcon from '../../assets/arrow.svg?react'
import Map from '../../assets/webp/map.webp'
import {AdvantageItems} from '../../components/ui/complex/AdvantageItems/AdvantageItems.tsx';
import ArrowPointerSmall from '../../assets/arrow3.svg?react'
import {ArrowButton} from '../../components/ui/primitive/arrowButton/arrowButton.tsx';
import {Team} from '../../components/ui/primitive/team/team.tsx';
import {StepCards} from '../../components/ui/complex/stepCards/stepCards.tsx';
import {FAQ} from '../../components/ui/complex/faq/faq.tsx';
import ArrowIconForPrices from '../../assets/arrow4.svg?react'

export const OnlineStoreDevPage = () => {
    return <div className={s.onlineStoreDevPage}>
        <Header/>
        <div className={s.mainContainer}>
            <h1>Разработка интернет-магазинов</h1>
            <div className={s.discussProject}>
                <p>Увеличиваем количество продаж через автоматизацию расчета стоимости доставки, онлайн-платежи и
                    выгрузку товаров на маркетплейсы</p>
                <ArrowButtonWithText text={'ОБСУДИТЬ ПРОЕКТ'}/>
            </div>
            <div className={s.serviceImg}>
                <img src={OnlineStoreImg} alt={''}/>
            </div>
            <div className={s.aboutService}>
                <h2>ОБ УСЛУГЕ</h2>
                <div className={s.container}>
                    <p>Мы создаем удобные online-шопинговые платформы, где легко найти любой товар с помощью эффективных
                        фильтров, а процесс оплаты и заказа доставки становится доступным всего в несколько кликов.
                        Возвращение пользователей в такие интернет-магазины — результат нашей работы!</p>
                    <ArrowButtonWithText text={'Консультация'} className={s.arrow}/>
                </div>
            </div>
        </div>
        <section className={s.location}>
            <div className={s.text}>
                <div>НАША</div>
                <AnimatedField variant={'light'}
                               className={s.starsSymbols}
                >
                    ★ ★ ★ ★ ★
                </AnimatedField>
                <div>ВЕБ-СТУДИЯ</div>
                <div>ОРИЕНТИРОВАНА</div>
                <AnimatedField
                    className={s.happySymbol}
                >
                    ⌢⌣</AnimatedField>
                <div>на</div>
                <AnimatedField className={s.kaomojiSymbol}>くコ:彡</AnimatedField>
                <AnimatedField variant={'dark'} className={s.emojiSymbol}>(:\/)</AnimatedField>
                <div>Долгосрочное</div>
                <div>сотрудничество</div>
                <AnimatedField variant={'dark'}
                               animation={'right'}
                               className={s.arrowSymbol}>
                    <ArrowIcon/>
                </AnimatedField>
                <AnimatedField variant={'light'}
                               className={s.kissSymbol}>:^*</AnimatedField>
            </div>
            <div className={s.map}>
                <img src={Map} alt="Карта"/>
                <p>Мы базируемся в Краснодаре и эффективно сотрудничаем с клиентами по всей России на удаленной
                    основе.</p>
            </div>
        </section>
        <div className={s.mainContainer}>
            <section className={s.advantages}>
                <div className={s.title}>
                    <h2><span>РАБОТАТЬ С НАМИ </span><br/>
                        ЛЕГКО, ПРИЯТНО И ВЫГОДНО!
                    </h2>
                    <ArrowPointerSmall className={s.arrow}/>
                </div>
                <AdvantageItems/>
                <div className={s.audience}>
                    <h2>Для тех, кто занимается продажами:</h2>
                    <ul>
                        <li><ArrowButton variant={'secondary'} size={'medium'}/> товаров</li>
                        <li><ArrowButton variant={'secondary'} size={'medium'}/> продуктов</li>
                        <li><ArrowButton variant={'secondary'} size={'medium'}/> экспертизы</li>
                        <li><ArrowButton variant={'secondary'} size={'medium'}/> услуг</li>
                    </ul>
                </div>
            </section>
            <section className={s.team}>
                <Team/>
            </section>
        </div>
        <StepCards className={s.stepCards}/>
        <section className={s.prices}>
            <div className={s.container}>
                <div className={s.cost}>Стоимость от <span>170 000 ₽</span></div>
                <ArrowButtonWithText text={'Обсудить проект'} className={s.arrow}/>
            </div>
            <div className={s.backgroundContainer}>
                <div className={s.background}></div>
            </div>
            <div className={s.additionalServices}>
                <h2>ДОПОЛНИТЕЛЬНЫЕ <br/> УСЛУГИ</h2>
                <ArrowIconForPrices className={s.arrow}/>
                <div className={s.priceContainer}>
                    <span>Разработка логотипа</span>
                    <span className={s.price}>от 5 000 ₽</span>
                    <span>Создание брендбука</span>
                    <span className={s.price}>от 5 000 ₽</span>
                    <span>Копирайтинг</span>
                    <span className={s.price}>от 350 ₽</span>
                    <span>Вывод на маркетплейсы</span>
                    <span className={s.price}>от 25 000 ₽</span>
                    <span>Контекстная реклама</span>
                    <span className={s.price}>от 20 000 ₽</span>
                    <span>SEO-продвижение</span>
                    <span className={s.price}>от 50 000 ₽</span>
                </div>
            </div>
        </section>
        <div className={s.mainContainer}>
            <FAQ className={s.faq}/>
        </div>
        <FooterWithForm/>
    </div>
}