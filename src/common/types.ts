import { ServicesLinkProps } from "@/components/layouts/servicesLink/servicesLink";

export type TagLink = {
  text: string;
  subLink: string;
};

export type linkData = Omit<ServicesLinkProps, 'number'>;