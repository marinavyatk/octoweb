import { AnimatedField } from "../../ui/animatedField/animatedField";
import s from "./greetingDescription.module.scss";
import ArrowIcon from "@/svg/arrow.svg";
import HappySymbol from "@/svg/happy-symbol.svg";

export const GreetingDescription = () => {
  return (
    <div className={s.greetingDescription}>
      <div>создаем</div>
      <AnimatedField variant={"secondary"} animation={"right"} className={s.starsSymbols}>
        ★ ★ ★ ★ ★
      </AnimatedField>
      <div>сайты</div>
      <div>для</div>
      <AnimatedField variant={"dark"} animation={"right"} className={s.arrowSymbol}>
        <ArrowIcon />
      </AnimatedField>
      <div>бизнеса</div>
      <AnimatedField animation={"left"} className={s.happySymbol}>
        <HappySymbol/>
      </AnimatedField>
      <div>на</div>
      <AnimatedField animation={"left"} className={s.kaomojiSymbol}>
        くコ:彡
      </AnimatedField>
      <div>основе</div>
      <div>данных</div>
      <div>и</div>
      <div>здравого</div>
      <AnimatedField variant={"dark"} animation={"right"} className={s.emojiSymbol}>
        (:\/)
      </AnimatedField>
      <div>смысла</div>
      <AnimatedField variant={"secondary"} animation={"left"} className={s.kissSymbol}>
        :^*
      </AnimatedField>
    </div>
  );
};
