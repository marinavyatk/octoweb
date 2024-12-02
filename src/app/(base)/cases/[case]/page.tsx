import s from "./case.module.scss";
import { Tag } from "@/components/ui/tag/tag";
import { WebsiteLink } from "@/components/ui/websiteLink/websiteLink";
import { caseData } from "@/common/componentsData/case";
import { clsx } from "clsx";
import { Picture } from "@/components/ui/picture/picture";

export default function Case() {
  const tagList = caseData.tags.map((tag) => {
    return (
      <Tag variant={"monochromeSecondary"} key={tag} className={s.tag}>
        {tag}
      </Tag>
    );
  });

  const stackTech = caseData.stack.map((el) => {
    return (
      <span key={el.stackField}>
        <b>{el.stackField}</b> — {el.tech.join(", ")}
      </span>
    );
  });

  return (
    <div className={s.casePage}>
      <div className={"mainContainer"}>
        <h1>{caseData.caseName}</h1>
        <div className={s.tagList}>{tagList}</div>
        <div className={s.topCaption}>
          <div className={s.field}>
            <span className={s.subheader}>Сфера</span>
            <span className={s.text}>{caseData.field}</span>
          </div>
          <WebsiteLink
            webSiteName={caseData.site.siteName}
            href={caseData.site.link}
          />
        </div>
      </div>
      <div className={s.mainInfoContainer}>
        <Picture src={caseData.img.main} alt="" fill containerProps={{ className: s.mainImgContainer }} priority
                 sizes={"100vw"} />
        <div className={s.descriptionContainer}>
          <p className={s.description}>{caseData.description}</p>
        </div>
      </div>
      <div className={clsx("mainContainer", s.taskBlock)}>
        <div className={s.taskHeader}>
          <h2>Задача</h2>
          <p className={s.taskDescription}>{caseData.taskDescription}</p>
        </div>
        <div className={s.images}>
          <Picture src={caseData.img.small} alt="" fill
                   sizes={"(max-width: 767px) 228px,(max-width: 1425px) 547px,(max-width: 1905px) 392px,536px"}
                   containerProps={{ className: s.smallImg }} />
          <Picture src={caseData.img.medium} alt="" fill
                   sizes={"(max-width: 767px) 288px,(max-width: 1425px) 691px,(max-width: 1905px) 808px, 1104px"}
                   containerProps={{ className: s.mediumImg }} />
        </div>
      </div>
      <Picture src={caseData.img.big} alt="" fill sizes={"100vw"} containerProps={{ className: s.bigImg }} />
      <div className={clsx("mainContainer", s.resultBlock)}>
        <div className={s.resultInfo}>
          <h2>Результат</h2>
          <div>
            <span className={s.subheader}>Стек технологий</span>
            <div className={s.stackTech}>{stackTech}</div>
          </div>
          <WebsiteLink
            webSiteName={caseData.site.siteName}
            href={caseData.site.link}
          />
        </div>
        <p className={s.resultDescription}>{caseData.resultDescription}</p>
      </div>
    </div>
  );
};
