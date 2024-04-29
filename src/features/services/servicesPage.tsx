import s from './servicesPage.module.scss'
import {Header} from '../../components/ui/complex/header/header.tsx';
import {ServicesCard} from '../../components/ui/primitive/servicesCard/servicesCard.tsx';
import {FooterWithForm} from '../../components/ui/complex/footerWithForm/footerWithForm.tsx';

export const ServicesPage = () => {
    return <div>
        <Header/>
        <div className={s.servicesPage}>
            <h1>УСЛУГИ</h1>
            <div className={s.firstRow}>
                <ServicesCard number={'01'} header={'Разработка Веб-Сайтов'}
                              tags={[{tag: 'Промо-сайт', price: '40000', href: '#'},
                                  {tag: 'Лендинг', price: '40000', href: '#'},
                                  {tag: 'Многостраничный сайт', price: '40000', href: '#'},
                                  {tag: 'Сайт-каталог', price: '40000', href: '#'},
                                  {tag: 'Интернет-магазин', price: '40000', href: '#services/online-store-development'}
                              ]}
                              size={'medium'}/>
                <ServicesCard number={'02'} header={'Интернет-Маркетинг'}
                              tags={[
                                  {tag: 'Контентное продвижение', price: '40000', href: '#'},
                                  {tag: 'Контекстная реклама', price: '40000', href: '#'},
                                  {tag: 'Таргетированная реклама', price: '40000', href: '#'},
                                  {tag: 'SEO', price: '40000', href: '#'}]}
                              size={'small'}/>
            </div>
            <div className={s.secondRow}>
                <ServicesCard number={'03'}
                              header={'Поддержка и Развитие'}
                              tags={[
                                  {tag: 'Техническая поддержка', price: '40000', href: '#'},
                                  {tag: 'Контент поддержка', price: '40000', href: '#'},
                                  {tag: 'Маркетинговая поддержка', price: '40000', href: '#'}
                              ]}
                              size={'small'}/>
                <ServicesCard number={'04'}
                              header={'Дополнительные Услуги'}
                              tags={[
                                  {tag: 'Аудит существующего сайта', price: '40000', href: '#'},
                                  {tag: 'Упаковка франшиз', price: '40000', href: '#'}
                              ]}
                                  size={'medium'}/>
                                  </div>
                                  </div>
                                  <FooterWithForm/>
                                  </div>
                              }