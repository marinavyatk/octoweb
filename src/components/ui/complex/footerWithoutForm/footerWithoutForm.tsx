import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./footerWithoutForm.module.scss";
import FooterFormImg from "../../../../assets/footerForm.png";
import { Footer } from "../footer/footer.tsx";

export type FooterWithoutFormProps = ComponentPropsWithoutRef<"div">;

export const FooterWithoutForm = (props: FooterWithoutFormProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.footerWithoutForm, className);
  return (
    <div {...restProps} className={classNames}>
      <img src={FooterFormImg} className={s.FooterFormImg} alt="" />
      <Footer />
    </div>
  );
};
