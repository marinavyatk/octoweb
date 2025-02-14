import s from "./article.module.scss";
import { Tag } from "@/components/ui/tag/tag";
import { ShareButton } from "@/components/ui/buttons/shareButton/shareButton";
import { FAQ } from "@/components/sections/faq/faq";
import { clsx } from "clsx";
import { Picture } from "@/components/ui/picture/picture";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { api } from "@/common/api";
import { getMetaDataObj } from "@/common/commonFunctions";
import Script from "next/script";


export async function generateMetadata({ params }: { params: { article: string } }) {
  const { article } = await params;
  const response = await api.getArticleSeo(article);
  if (!response) return {};
  const metadata = response?.[0]?.yoast_head_json;

  return getMetaDataObj(metadata);
}


export default async function Article({ params }: {
  params: Promise<{ article: string }>
}) {
  const { article } = await params;
  const articleInfo = await api.getArticle(article);

  if (!articleInfo) return null;

  const response = await api.getArticleSeo(article);
  const schema = response?.[0]?.yoast_head_json.schema;

  const tags = articleInfo.categories.map((tag) => {
    return (
      <Tag key={tag} variant={"colored"} className={s.tag}>
        {tag}
      </Tag>
    );
  });

  const creationDate = <Tag variant={"monochromeSecondary"} className={s.tag}>
    {articleInfo.date}
  </Tag>;

  return (
    <>
      <div className={clsx(s.articlePage, "mainContainer")}>
        <h1>{articleInfo.title}</h1>
        <div className={s.caption}>
          <div className={s.tagList}>
            {tags}
            {creationDate}
            <Tag variant={"monochromeSecondary"} className={s.tag}>
              {articleInfo.reading_time}
            </Tag>
          </div>
          <ShareButton />
        </div>
        <Picture src={articleInfo.image} alt="" fill containerProps={{ className: s.imgContainer }} priority />
        <div className={s.article}>
          <BigBubble className={s.bigBubble} />
          <div dangerouslySetInnerHTML={{ __html: articleInfo.content }}></div>
        </div>
        <div className={s.caption + " " + s.bottomCaption}>
          <div className={s.tagList}>
            {tags}
            {creationDate}
          </div>
          <ShareButton />
        </div>
        <div className={s.smallBubbleContainer}>
          <SmallBubble className={s.smallBubble} />
        </div>
        <FAQ faqData={articleInfo.faq} className={s.faq} />
      </div>
      {schema &&
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          id="article"
          strategy="beforeInteractive"
        ></Script>
      }
    </>
  );
};
