import s from "./advantageSection.module.scss";
import { AdvantageItems } from "../AdvantageItems/AdvantageItems";
import ArrowPointerSmall from "@/svg/arrow3.svg";
import { clsx } from "clsx";

type AdvantageSectionProps = {
  className?: string;
};
export const AdvantageSection = (props: AdvantageSectionProps) => {
  const { className } = props;
  const classNames = clsx(s.advantages, className);
  return (
    <section className={classNames}>
      <div className={s.title}>
        <h2>
          <span>РАБОТАТЬ С НАМИ </span>
          <br />
          ЛЕГКО, ПРИЯТНО И ВЫГОДНО!
        </h2>
        <ArrowPointerSmall className={s.arrow} />
      </div>
      <AdvantageItems />
    </section>
  );
};
