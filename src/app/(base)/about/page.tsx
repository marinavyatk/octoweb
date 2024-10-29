import s from './aboutPage.module.scss';
import {StackList} from '@/components/layouts/stackList/stackList';
import {TeamMemberCards} from '@/components/layouts/teamMembersCards/teamMembersCards';
import {teamMembersInfo} from '@/common/componentsData/teamMembersInfo';
import Image from 'next/image';

export default function  About (){

  return (
    <div className={s.aboutPage}>
      <div className={s.aboutPageContent}>
        <div className={'mainContainer'}>
          <h1>
            О веб-студии <br /> OctoWeb
          </h1>
          <p>Раскроем подробности о том, кто стоит за реализацией проектов</p>
        </div>
        <div className={s.imageContainer}>
          <Image src={"/teamMainPhoto.webp"} alt={'Команда'} fill priority/>
        </div>
        <div className={'mainContainer'}>
          <div className={s.aboutCompany}>
            <h2>О компании</h2>
            <p>
              Выступаем стратегическим партнером для развития бизнеса в цифровом пространстве с 2018
              года. За это время выпустили более 150 проектов. Задача нашей компании — разрабатывать
              цифровые решения, способные помогать бизнесу становиться ключевым игроком в своей
              сфере
            </p>
          </div>
          <StackList />
        </div>
        <div className={s.aboutTeam}>
          <TeamMemberCards teamMembers={teamMembersInfo} className={s.teamCards} />
        </div>
      </div>
    </div>
  );
};
