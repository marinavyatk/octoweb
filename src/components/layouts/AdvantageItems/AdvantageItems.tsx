import {AdvantageItem} from '@/components/layouts/advantageItem/advantageItem';
import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./AdvantageItems.module.scss";


export type AdvantageItemsProps = ComponentPropsWithoutRef<"div">;

export const AdvantageItems = (props: AdvantageItemsProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.advantagesItems, className);
  const advantageData = [
    {
      number: "01",
      description:
        "Говорим с вами на одном языке, чтобы вы могли понимать конечный результат",
    },
    {
      number: "02",
      description:
        "Во всех коммуникациях учавствуют основные сотрудники нашей студии",
    },
    {
      number: "03",
      description:
        "Быстро включаемся в решение задачи и также быстро справляемся с ней",
    },
    {
      number: "04",
      description:
        "Цена фиксируется в договоре, без скрытых или неочевидных платежей",
    },
  ];
  const advantageItemsList = advantageData.map((item) => {
    return (
      <AdvantageItem
        number={item.number}
        description={item.description}
        key={item.number}
      />
    );
  });
  return (
    <div {...restProps} className={classNames}>
      {advantageItemsList}
    </div>
  );
};
