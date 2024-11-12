"use client";

import { clsx } from "clsx";
import s from "./shareButton.module.scss";
import { ComponentPropsWithoutRef, useState } from "react";
import { Tag } from "../../tag/tag";
import ShareIcon from "@/svg/shareIcon.svg";
import Head from "next/head";

export type ShareButtonProps = ComponentPropsWithoutRef<"div">;

export const ShareButton = (props: ShareButtonProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.shareButton, className);
  const url = document.location.href;
  const [isCopied, setIsCopied] = useState(false);

  //need to change share data
  const shareData = {
    title: "Octoweb.ru - Создание и продвижений сайтов",
    text: "Посмотри эту статью. Мы подготовили для тебя много полезной информации!",
    url: url
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      if (window.innerWidth <= 768) {
        await navigator.share(shareData);
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className={classNames} {...restProps}>
      <Head>
        <meta property="og:title" content="Octoweb.ru - Создание и продвижений сайтов" />
        <meta property="og:description"
              content="Посмотри эту статью. Мы подготовили для тебя много полезной информации!" />
        <meta property="og:image" content="/blogImgSemantic.png" />
        <meta property="og:image" content="/blogImgSemantic.png" />
        <meta property="og:url" content={url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Octoweb.ru - Создание и продвижений сайтов" />
        <meta name="twitter:description"
              content="Посмотри эту статью. Мы подготовили для тебя много полезной информации!" />
        <meta name="twitter:image" content="/blogImgSemantic.png" />
      </Head>
      <Tag as={"button"} variant={"monochrome-secondary"} onClick={copyUrl}>
        Поделиться <ShareIcon />
      </Tag>
      {isCopied && <span className={s.underline}>Ссылка скопирована!</span>}
    </div>
  );
};
