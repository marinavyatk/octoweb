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
                <ServicesCard number={'01'} title={'Разработка Веб-Сайтов'}
                              tags={['Промо-сайт', 'Лендинг', 'Многостраничный сайт', 'Сайт-каталог', 'Интернет-магазин']}
                              size={'medium'}/>
                <ServicesCard number={'02'} title={'Интернет-Маркетинг'}
                              tags={['Контентное продвижение', 'Контекстная реклама', 'Таргетированная реклама', 'SEO']}
                              size={'small'}/>
            </div>
            <div className={s.secondRow}><ServicesCard number={'03'} title={'Поддержка и Развитие'}
                                                       tags={['Техническая поддержка', 'Контент поддержка', 'Маркетинговая поддержка']}
                                                       size={'small'}/>
                <ServicesCard number={'04'} title={'Дополнительные Услуги'}
                              tags={['Аудит существующего сайта', 'Упаковка франшиз']}
                              size={'medium'}/></div>
        </div>
        <FooterWithForm/>
    </div>
}