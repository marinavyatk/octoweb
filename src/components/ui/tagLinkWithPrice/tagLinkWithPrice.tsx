"use client";

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import s from "./tagLinkWithPrice.module.scss";
import { Tag } from "../tag/tag";
import Link from "next/link";

export type TagLink = {
  tag: string;
  price: string;
  serviceId: string;
  category: string;
};

export type TagLinkWithPriceProps = TagLink & ComponentPropsWithoutRef<"a">;

export const TagLinkWithPrice = (props: TagLinkWithPriceProps) => {
  const { tag, category, price, serviceId, className, ...restProps } = props;
  const classNames = clsx(s.tagLink, className);
  const [tooltipPosition, setTooltipPosition] = useState<"left" | "right">("left");
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const tooltipRect = useRef<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRect = useRef<DOMRect | null>(null);

  useEffect(() => {
    const tooltip = tooltipRef.current;
    const container = containerRef.current;
    const viewportWidth = window.innerWidth;
    if (!tooltip || !container || viewportWidth <= 768) {
      return;
    }
    const scrollbarWidth = 15;
    const offset = 80;

    const handleMouseEnter = () => {
      tooltip.style.opacity = "0";
      tooltip.style.display = "block";

      if (tooltipRect.current === null) {
        tooltipRect.current = tooltip.getBoundingClientRect();
      }
      if (containerRect.current === null) {
        containerRect.current = container.getBoundingClientRect();
      }
      if (containerRect.current?.left && tooltipRect.current?.width) {
        const isOverScreen = (containerRect.current?.left + tooltipRect.current?.width + offset) >= (viewportWidth - scrollbarWidth);
        if (isOverScreen) {
          setTooltipPosition("right");
        } else {
          setTooltipPosition("left");
        }
        setTimeout(()=>{
          tooltip.style.opacity = "1";
        }, 10)
      }
    };

    const handleMouseLeave = () => {
      tooltip.style.display = "none";
    };

    container?.addEventListener("mouseenter", handleMouseEnter);
    container?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container?.removeEventListener("mouseenter", handleMouseEnter);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={classNames} ref={containerRef}>
      <Tag
        variant={"monochromeSecondary"}
        as={Link}
        href={`/services/${category}/${serviceId}`}
        className={s.tag}
        {...restProps}
      >
        {tag}
      </Tag>
      <span className={clsx(s.price, s[tooltipPosition])} ref={tooltipRef}>от {price} руб.</span>
    </div>
  );
};
