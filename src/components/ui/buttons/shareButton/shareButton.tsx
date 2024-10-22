'use client'

import { clsx } from "clsx";
import s from "./shareButton.module.scss";
import { ComponentPropsWithoutRef, useState } from "react";
import { Tag } from "../../tag/tag";
import ShareIcon from "@/svg/shareIcon.svg";

export type ShareButtonProps = ComponentPropsWithoutRef<"div">;
export const ShareButton = (props: ShareButtonProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.shareButton, className);
  const url = document.location.href;
  const [isCopied, setIsCopied] = useState(false);
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={classNames} {...restProps}>
      <Tag as={"button"} variant={"monochrome-secondary"} onClick={copyUrl}>
        Поделиться <ShareIcon />
      </Tag>
      {isCopied && <span className={s.underline}>Ссылка скопирована!</span>}
    </div>
  );
};
