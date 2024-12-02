import { ServicesLinkProps } from "@/components/layouts/servicesLink/servicesLink";
import { WordSwipeProps } from "@/components/ui/wordSwipe/wordSwipe";

export type TagLink = {
  text: string;
  subLink: string;
};

export type linkData = Omit<ServicesLinkProps, 'number'>;

export type TextContent = {
  firstLine: string,
  secondLine: string,
  thirdLine: string,
  wordSwipeProps: WordSwipeProps
}