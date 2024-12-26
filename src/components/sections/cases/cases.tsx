"use client";

import s from "./cases.module.scss";
import { CaseCard, Size } from "@/components/layouts/caseCard/caseCard";
import { mainPageCases } from "@/common/componentsData/mainPageCases";
import { Button } from "@/components/ui/buttons/button/button";
import Link from "next/link";
import { routes } from "@/common/routes";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { useEffect, useState } from "react";

export const Cases = () => {
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <section className={s.cases}>
    <h2>КЕЙСЫ</h2>
    <CaseCard as={"h3"} size={"extraLarge" as Size} {...mainPageCases[0]} index={0} />
    <CaseCard
      as={"h3"}
      size={"large" as Size}
      {...mainPageCases[1]}
      className={s.secondCard}
      index={screenWidth <= 1265 ? 1 : 0}
    />
    <CaseCard as={"h3"} size={"small" as Size} {...mainPageCases[2]} index={screenWidth <= 1265 ? 0 : 1} />
    <CaseCard
      as={"h3"}
      size={"medium" as Size}
      {...mainPageCases[3]}
      className={s.fourCard}
      index={1}
    />
    <Button as={Link} text={"Больше кейсов"} href={routes.cases} className={s.arrowLink} />
    <BigBubble className={s.bigBubbleCases} />
  </section>;
};