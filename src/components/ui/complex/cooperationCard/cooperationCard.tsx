import s from "./cooperationCard.module.scss";
import { AnimatedField } from "../../primitive/animatedField/animatedField.tsx";
import Map from "../../../../assets/webp/map.webp";
import ArrowIcon from "../../../../assets/arrow.svg?react";

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
          <img src={Map} alt="Карта" />
        </div>

        <p>
          Мы базируемся в Краснодаре и эффективно сотрудничаем с клиентами по
          всей России на удаленной основе.
        </p>
      </div>
    </section>
  );
};
