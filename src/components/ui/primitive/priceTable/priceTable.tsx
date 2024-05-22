import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./priceTable.module.scss";

export type priceItem = {
  service: string;
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
      <div className={s.priceRow}>
        <span>{item.service}</span>
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
