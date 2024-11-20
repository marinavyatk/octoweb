import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./footerWithoutForm.module.scss";
import { Footer } from "../footer/footer";

export type FooterWithoutFormProps = ComponentPropsWithoutRef<"div">;

export const FooterWithoutForm = (props: FooterWithoutFormProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.footerWithoutForm, className);
  return (
    <div {...restProps} className={classNames}>
      <img src={'/footerForm.png'} className={s.footerFormImg} alt="" />
      <Footer needBriefLink={false} />
    </div>
  );
};
