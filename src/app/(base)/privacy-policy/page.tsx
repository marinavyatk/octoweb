import { api } from "@/common/api";
import s from "./privacyPolicy.module.scss";
import { clsx } from "clsx";

export default async function PrivacyPolicy() {
  const response = await api.getPrivacyPolicy();

  if (!response) return null;

  return <div className={clsx("mainContainer", s.privacyPage)}>
    <h1> {response.title} </h1>
    <div dangerouslySetInnerHTML={{ __html: response.content }} className={s.content}></div>
  </div>;
}