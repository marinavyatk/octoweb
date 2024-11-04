import s from "./cooperationCard.module.scss";
import { AnimatedField } from "../../ui/animatedField/animatedField";
import ArrowIcon from "@/svg/arrow.svg";
import Image from "next/image";

export const CooperationCard = () => {
  return (
    <section className={s.location}>
      <div className={s.text}>
        <div>НАША</div>
        <AnimatedField variant={"light"} className={s.starsSymbols}>
          ★ ★ ★ ★ ★
        </AnimatedField>
        <div>ВЕБ-СТУДИЯ</div>
        <div>ОРИЕНТИРОВАНА</div>
        <AnimatedField className={s.happySymbol}>⌢⌣</AnimatedField>
        <div>на</div>
        <AnimatedField className={s.kaomojiSymbol}>くコ:彡</AnimatedField>
        <AnimatedField variant={"dark"} className={s.emojiSymbol}>
          (:\/)
        </AnimatedField>
        <div>Долгосрочное</div>
        <div>сотрудничество</div>
        <AnimatedField variant={"dark"} className={s.arrowSymbol}>
          <ArrowIcon />
        </AnimatedField>
        <AnimatedField variant={"light"} className={s.kissSymbol}>
          :^*
        </AnimatedField>
      </div>
      <div className={s.map}>
        <div className={s.imgContainer}>
          <Image src={"/map.webp"} alt={"Карта"} fill
                 sizes={"(max-width: 767px) 375px,(max-width: 1265px) 736px, (max-width: 1425px) 1193px, (max-width: 1905px) 1224px, 1655px"} />
        </div>
        <p>
          Мы базируемся в Краснодаре и эффективно сотрудничаем с клиентами по
          всей России на удаленной основе.
        </p>
      </div>
    </section>
  );
};
