import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./priceTable.module.scss";

export type priceItem = {
  name: string;
  price: string;
};

export type PriceTableProps = {
  priceItems: priceItem[];
} & ComponentPropsWithoutRef<"div">;

export const PriceTable = (props: PriceTableProps) => {
  const { priceItems, className, ...restProps } = props;
  const classNames = clsx(s.priceTable, className);

  const priceList = priceItems.map((item) => {
    return (
      <div className={s.priceRow} key={item.name + " " + item.price}>
        <h3>{item.name}</h3>
        <span className={s.price}>от {item.price} ₽</span>
      </div>
    );
  });

  return (
    <div {...restProps} className={classNames}>
      {priceList}
    </div>
  );
};
