import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./footerWithoutForm.module.scss";
import { Footer } from "../footer/footer";
import FooterShape from "@/svg/footerForm.svg";
import { Social } from "@/common/types";

export type FooterWithoutFormProps = {
  socials: Social[];
} & ComponentPropsWithoutRef<"div">;

export const FooterWithoutForm = (props: FooterWithoutFormProps) => {
  const { socials, className, ...restProps } = props;
  const classNames = clsx(s.footerWithoutForm, className);

  return (
    <div {...restProps} className={classNames}>
      <FooterShape className={s.footerForm} />
      <Footer
        needBriefLink={false}
        contactLinksProps={{
          className: s.contactLinks,
          containerProps: { className: s.contactLinksContainer },
          socials: socials || [],
        }}
      />
    </div>
  );
};
