import { AdvantageItem } from "@/components/layouts/advantageItem/advantageItem";
import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./advantageItems.module.scss";
import { advantageData } from "@/common/componentsData/advantageItems";

export type AdvantageItemsProps = ComponentPropsWithoutRef<"div">;

export const AdvantageItems = (props: AdvantageItemsProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.advantagesItems, className);

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
