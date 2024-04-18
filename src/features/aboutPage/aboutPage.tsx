import s from './aboutPage.module.scss'
import {Header} from '../../components/ui/complex/header/header.tsx';
import {FooterWithForm} from '../../components/ui/complex/footerWithForm/footerWithForm.tsx';
import TeamMainPhoto from '../../assets/webp/teamMainPhoto.webp'
import {StackList} from '../../components/ui/complex/stackList/stackList.tsx';

export const AboutPage = () => {
    return <div className={s.aboutPage}>
        <Header/>
        <div className={s.mainContainer}>
            <h1>О веб-студии <br/> OctoWeb</h1>
            <p>Раскроем подробности о том, кто стоит за реализацией проектов</p>
        </div>
        <div className={s.imageContainer}>
            <img src={TeamMainPhoto} alt="Команда"/>
        </div>

        <div className={s.mainContainer}>
        <div className={s.aboutCompany}>
            <h2>О компании</h2>
            <p>Выступаем стратегическим партнером для развития бизнеса в цифровом пространстве с 2018 года. За это время выпустили более 150 проектов.Задача нашей компании — разрабатывать цифровые решения, способные помогать бизнесу становиться ключевым игроком в своей сфере</p>
        </div>
            <StackList/>

            <div className={s.aboutTeam}>
                <h2>КОМАНДА</h2>
            </div>

        </div>
        <FooterWithForm/>
    </div>
}