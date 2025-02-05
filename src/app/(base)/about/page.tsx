import s from "./aboutPage.module.scss";
import { StackList } from "@/components/sections/stackList/stackList";
import { TeamMemberCards } from "@/components/sections/teamMembersCards/teamMembersCards";
import { Picture } from "@/components/ui/picture/picture";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { api } from "@/common/api";


export default async function About() {
 const team =  await api.getTeam()

  return (
    <div className={s.aboutPage}>
      <div className={"mainContainer"}>
        <BigBubble  className={s.bubble}/>
        <h1>
          О веб-студии <br /> OctoWeb
        </h1>
        <p className={s.description}>Раскроем подробности о том, кто стоит за реализацией проектов</p>
      </div>
      <Picture src={"/teamMainPhoto.webp"}
               alt={"Команда"}
               fill
               priority
               containerProps={{ className: s.imageContainer }}
      />
      <div className={"mainContainer"}>
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
      <TeamMemberCards teamMembers={team} className={s.teamCards} />
    </div>
  );
};
