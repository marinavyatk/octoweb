import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./footerWithoutForm.module.scss";
import { Footer } from "../footer/footer";
import Image from "next/image";

export type FooterWithoutFormProps = ComponentPropsWithoutRef<"div">;

export const FooterWithoutForm = (props: FooterWithoutFormProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.footerWithoutForm, className);

  return (
    <div {...restProps} className={classNames}>
      <Image src={"/footerForm.png"} className={s.footerFormImg} alt="" fill sizes='100vw'/>
      <Footer needBriefLink={false} />
    </div>
  );
};
