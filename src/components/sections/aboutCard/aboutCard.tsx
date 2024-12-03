import s from "./aboutCard.module.scss";
import { Button } from "@/components/ui/buttons/button/button";
import { Picture } from "@/components/ui/picture/picture";
import { clsx } from "clsx";
import { ComponentPropsWithoutRef } from "react";

type AboutCardProps = ComponentPropsWithoutRef<"div">

export const AboutCard = (props: AboutCardProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.about, className);

  return (
    <section className={classNames} {...restProps}>
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
        <Picture src={"/teamMainPhoto.webp"}
                 alt={"Команда"}
                 fill
                 priority
                 sizes={"(max-width: 767px) 100vw, (max-width: 1280px) 1152px, (max-width: 1440px) 1328px, 1816px"}
                 containerProps={{ className: s.imgContainer }} />
        <Button
          as={"a"}
          variant={"dark"}
          text={"Заказать проект"}
          href={"#form"}
          className={s.arrowButton}
        />
      </div>
    </section>
  );
};
