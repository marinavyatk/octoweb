import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./footerWithoutForm.module.scss";
import { Footer } from "../footer/footer";
import FooterForm from "@/svg/footerForm.svg";

export type FooterWithoutFormProps = ComponentPropsWithoutRef<"div">;

export const FooterWithoutForm = (props: FooterWithoutFormProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.footerWithoutForm, className);

  return (
    <div {...restProps} className={classNames}>
      <FooterForm className={s.footerForm} />
      <Footer needBriefLink={false} />
    </div>
  );
};
