import s from './services.module.scss';
import {ServicesCard} from '@/components/layouts/servicesCard/servicesCard';


export default function Services() {

    return (
        <div>
            <div className={s.servicesPage}>
                <h1>УСЛУГИ</h1>
                <div className={s.cardContainer}>
                    <div>
                        <div className={s.firstRow}>
                            <ServicesCard
                                serviceCategory={'website-development'}
                                number={'01'}
                                header={'Разработка Веб-Сайтов'}
                                tags={[
                                    {
                                        tag: 'Промо-сайт',
                                        price: '40000',
                                        serviceId: 'promo-website',
                                    },
                                    {
                                        tag: 'Лендинг',
                                        price: '40000',
                                        serviceId: 'landing',
                                    },
                                    {
                                        tag: 'Многостраничный сайт',
                                        price: '40000',
                                        serviceId: 'multi-page-website',
                                    },
                                    {
                                        tag: 'Сайт-каталог',
                                        price: '40000',
                                        serviceId: 'catalog-website',
                                    },
                                    {
                                        tag: 'Интернет-магазин',
                                        price: '40000',
                                        serviceId: 'online-store',
                                    },
                                ]}
                                size={'medium'}
                            />
                            <ServicesCard
                                serviceCategory={'internet-marketing'}
                                number={'02'}
                                header={'Интернет-Маркетинг'}
                                tags={[
                                    {
                                        tag: 'Контентное продвижение',
                                        price: '40000',
                                        serviceId: 'content-promotion',
                                    },

                                    {tag: 'SEO', price: '40000', serviceId: 'seo'},
                                    {
                                        tag: 'Контекстная реклама',
                                        price: '40000',
                                        serviceId: 'contextual-advertising',
                                    },
                                    {
                                        tag: 'Таргетированная реклама',
                                        price: '40000',
                                        serviceId: 'targeted-advertising',
                                    },
                                ]}
                                size={'small'}
                            />
                        </div>
                        <div className={s.secondRow}>
                            <ServicesCard
                                serviceCategory={'support&development'}
                                number={'03'}
                                header={'Поддержка и Развитие'}
                                tags={[
                                    {
                                        tag: 'Техническая поддержка',
                                        price: '40000',
                                        serviceId: 'technical-support',
                                    },
                                    {
                                        tag: 'Контент поддержка',
                                        price: '40000',
                                        serviceId: 'content-support',
                                    },
                                    {
                                        tag: 'Маркетинговая поддержка',
                                        price: '40000',
                                        serviceId: 'marketing-support',
                                    },
                                ]}
                                size={'small'}
                            />
                            <ServicesCard
                                serviceCategory={'additional'}
                                number={'04'}
                                header={'Дополнительные Услуги'}
                                tags={[
                                    {
                                        tag: 'Аудит существующего сайта',
                                        price: '40000',
                                        serviceId: 'audit',
                                    },
                                    {
                                        tag: 'Упаковка франшиз',
                                        price: '40000',
                                        serviceId: 'franchise-packaging',
                                    },
                                ]}
                                size={'medium'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
