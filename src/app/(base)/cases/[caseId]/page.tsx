import s from "./case.module.scss";
import { Tag } from "@/components/ui/tag/tag";
import { WebsiteLink } from "@/components/ui/websiteLink/websiteLink";
import { clsx } from "clsx";
import { Picture } from "@/components/ui/picture/picture";
import { BigBubble } from "@/components/video/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble";
import { api } from "@/common/api";
import Script from "next/script";
import { getMetaDataObj } from "@/common/commonFunctions";


export async function generateMetadata({ params }: { params: { caseId: string } }) {
  const { caseId } = await params;
  const metadata = await api.getCaseSeo(caseId);
  if (!metadata) return {};

  return getMetaDataObj(metadata);
}


export default async function Case({ params }: {
  params: Promise<{ caseId: string }>
}) {
  const { caseId } = await params;
  const [casePage, seo] = await Promise.all([api.getCase(caseId), api.getCaseSeo(caseId)]);
  if (!casePage) return;

  const schema = seo?.schema;
  const smallImg = casePage.images.small;
  const mediumImg = casePage.images.medium;
  const bigImg = casePage.images.big;

  const tagList = casePage?.services.map((tag) => {
    return (
      <Tag variant={"monochromeSecondary"} key={tag} className={s.tag}>
        {tag}
      </Tag>
    );
  });

  const caseLink = <WebsiteLink
    webSiteName={casePage.website_url.name}
    href={casePage.website_url.url}
  />;

  return (
    <>
      <div className={s.casePage}>
        <div className={"mainContainer"}>
          <h1>{casePage.title}</h1>
          <div className={s.tagList}>{tagList}</div>
          <div className={s.topCaption}>
            <div className={s.field}>
              <span className={s.subheader}>Сфера</span>
              <span className={s.text}>{casePage.scope}</span>
            </div>
            {caseLink}
          </div>
        </div>
        <div className={s.mainInfoContainer}>
          <Picture src={casePage.images.main} alt="" fill containerProps={{ className: s.mainImgContainer }} priority
                   sizes={"100vw"} />
          <div className={s.descriptionContainer}>
            <div className={s.description} dangerouslySetInnerHTML={{ __html: casePage.description }}></div>
          </div>
        </div>
        <div className={clsx("mainContainer", s.taskBlock)}>
          <div className={s.taskHeader}>
            <h2>Задача</h2>
            <div className={s.taskDescription} dangerouslySetInnerHTML={{ __html: casePage.task }}></div>
          </div>
          <div className={s.images}>
            {smallImg &&
              <Picture src={smallImg} alt="" fill
                       sizes={"(max-width: 767px) 228px,(max-width: 1425px) 547px,(max-width: 1905px) 392px,536px"}
                       containerProps={{ className: s.smallImg }} />
            }
            {mediumImg &&
              <Picture src={mediumImg} alt="" fill
                       sizes={"(max-width: 767px) 288px,(max-width: 1425px) 691px,(max-width: 1905px) 808px, 1104px"}
                       containerProps={{ className: s.mediumImg }} />}
          </div>
          <BigBubble className={s.bigBubbleTask} />
        </div>
        {bigImg &&
          <Picture src={bigImg} alt="" fill sizes={"100vw"} containerProps={{ className: s.bigImg }} />}
        <div className={clsx("mainContainer", s.resultBlock)}>
          <SmallBubble className={s.smallBubbleResult} />
          <div className={s.resultInfo}>
            <h2>Результат</h2>
            <div>
              <span className={s.subheader}>Стек технологий</span>
              <div className={s.stackTech} dangerouslySetInnerHTML={{ __html: casePage["tech_stack"] }}></div>
            </div>
            {caseLink}
          </div>
          <div className={s.resultDescription} dangerouslySetInnerHTML={{ __html: casePage["project_text"] }}></div>
        </div>
      </div>
      {schema &&
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          id="case"
          strategy="beforeInteractive"
        ></Script>
      }
    </>
  );
};
