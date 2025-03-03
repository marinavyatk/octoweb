"use client";

import s from "./underConstruction.module.scss";
import { ContactButton } from "@/components/ui/buttons/contactButton/contactButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onClickHandler = () => {
    const password = prompt("Для команды");
    if (password === "op123en") {
      document.cookie = "isAuthorized=true; path=/; max-age=2592000";
      router.push("/");
    }
  };

  return (
    <div className={s.notFound}>
      <h1 onClick={onClickHandler}>Скоро!</h1>
      <p>
        Наш новый сайт находится в стадии разработки. <br />
        Скоро он станет доступен, а пока переходите на{" "}
        <a href={"https://octoweb.ru"}>https://octoweb.ru</a>
      </p>
      <ContactButton
        href={"https://octoweb.ru/"}
        text={"Посетить octoweb"}
        className={s.link}
      />
      <div className={s.positionContainer}>
        <div className={s.bubbleContainer}>
          <Image
            src={"/bubble.webp"}
            alt=""
            fill
            sizes={
              "(max-width: 1100px) 330px, (max-width: 1400px) 530px, 630px"
            }
          />
        </div>
      </div>
      <div className={s.positionContainer}>
        <div className={s.bubbleContainer}>
          <Image
            src={"/bubble-2.webp"}
            alt=""
            fill
            sizes={
              "(max-width: 1100px) 330px, (max-width: 1400px) 530px, 630px"
            }
          />
        </div>
      </div>
    </div>
  );
}
