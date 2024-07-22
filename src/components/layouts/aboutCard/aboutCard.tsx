import s from "./aboutCard.module.scss";
import teamPhoto from "../../../assets/webp/teamMainPhoto.webp";
import { ArrowLinkWithText } from "../../ui/primitive/ArrowLinkWithText/arrowLinkWithText.tsx";

export const AboutCard = () => {
  return (
    <div className={s.about}>
      <div className={s.text}>
        <h2>
          ВЕБ-студия <br />
          OCTOWEB
        </h2>
        <p>
          С 2018 года специализируемся на разработке, сопровождении и развитии IT-продуктов,
          интернет-магазинов и бизнес-сайтов
        </p>
      </div>

      <div className={s.imageWithButton}>
        <div className={s.imgContainer}>
          <img src={teamPhoto} alt={"Команда"} />
        </div>
        <ArrowLinkWithText
          variant={"dark"}
          text={"Заказать проект"}
          href={"#form"}
          className={s.arrowButton}
        />
      </div>
    </div>
  );
};
