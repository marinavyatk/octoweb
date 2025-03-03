import Brief from "@/app/(withoutForm)/brief/brief";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Бриф на разработку сайта – Веб-студия OctoWeb",
  description:
    "Бриф - это анкета, подробное заполнение которой, дает возможность разработки идеального сайта с минимальным количеством правок.",
};

export default function BriefPage() {
  return <Brief />;
}
