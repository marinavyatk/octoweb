import s from './aboutCard.module.scss';
import Image from 'next/image';
import { ArrowButtonWithText } from "@/components/ui/buttons/ArrowButtonWithText/arrowButtonWithText";

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
            <Image src={'/teamMainPhoto.webp'} alt={"Команда"} fill sizes={'(max-width: 767px) 736px, (max-width: 1280px) 1152px, (max-width: 1440px) 1328px, 1816px'} />
        </div>
        <ArrowButtonWithText
          as={'a'}
          variant={"dark"}
          text={"Заказать проект"}
          href={"#form"}
          className={s.arrowButton}
        />
      </div>
    </div>
  );
};
