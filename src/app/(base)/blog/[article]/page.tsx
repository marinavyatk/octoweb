import s from "./article.module.scss";
import { Tag } from "@/components/ui/tag/tag";
import { ShareButton } from "@/components/ui/buttons/shareButton/shareButton";
import { FAQ } from "@/components/sections/faq/faq";
import { ElementType } from "react";
import { articleData } from "@/common/componentsData/article";
import { faqData } from "@/common/componentsData/faq";
import { clsx } from "clsx";
import { Picture } from "@/components/ui/picture/picture";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";


export default function Article() {
//need to change after server connect

  const tags = articleData.tags.map((tag) => {
    return (
      <Tag key={tag} variant={"colored"} className={s.tag}>
        {tag}
      </Tag>
    );
  });

  const articleContent = articleData.articleContent.map((section) => {
    return (
      <section className={s.articleSection} key={section.sectionHeader}>
        <div className={s.articleText}>
          <h2>{section.sectionHeader}</h2>
          {section.sectionContent.map((textEl) => {
            const Element = textEl.as as ElementType;
            return (
              <Element className={s[textEl.as + "Element"]} key={textEl.text}>
                {textEl.text}
              </Element>
            );
          })}
        </div>
        {section.sectionImg && (
          <img src={section.sectionImg} alt="" />
        )}
      </section>
    );
  });

  return (
    <div className={clsx(s.articlePage, "mainContainer")}>
      <h1>{articleData.mainHeader}</h1>
      <div className={s.caption}>
        <div className={s.tagList}>
          {tags}
          <Tag variant={"monochromeSecondary"} className={s.tag}>
            {articleData.creationData}
          </Tag>
          <Tag variant={"monochromeSecondary"} className={s.tag}>
            {articleData.timeToRead} мин. чтения
          </Tag>
        </div>
        <ShareButton />
      </div>
      <Picture src={articleData.mainPhoto} alt="" fill containerProps={{ className: s.imgContainer }} priority />
      <div className={s.article}>
        <BigBubble className={s.bigBubble}/>
        {articleContent}
      </div>
      <div className={s.caption + " " + s.bottomCaption}>
        <div className={s.tagList}>
          {tags}
          <Tag variant={"monochromeSecondary"} className={s.tag}>
            {articleData.creationData}
          </Tag>
        </div>
        <ShareButton />
      </div>
      <div className={s.smallBubbleContainer}>
        <SmallBubble className={s.smallBubble} />
      </div>
      <FAQ faqData={faqData} className={s.faq} />
    </div>
  );
};
