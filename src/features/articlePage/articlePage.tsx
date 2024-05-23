import s from "./articlePage.module.scss";
import { Header } from "../../components/ui/complex/header/header.tsx";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import SemanticArticleCover from "../../assets/webp/blogImgSemantic.png";
import { Tag } from "../../components/ui/primitive/tag/tag.tsx";
import { ShareButton } from "../../components/ui/primitive/shareButton/shareButton.tsx";
import { FAQ, faqData } from "../../components/ui/complex/faq/faq.tsx";

const articleData = {
  mainHeader: "Как собрать семантику самому, без парсеров",
  tags: ["SEO", "Ads"],
  creationData: "14 Мая, 2024",
  timeToRead: "5",
  mainPhoto: SemanticArticleCover,
};

export const ArticlePage = () => {
  const tags = articleData.tags.map((tag) => {
    return (
      <Tag key={tag} variant={"colored"} className={s.tag}>
        {tag}
      </Tag>
    );
  });

  return (
    <div className={s.articlePage}>
      <Header />
      <div className={s.articleContent}>
        <h1>{articleData.mainHeader}</h1>
        <div className={s.topCaption}>
          <div className={s.tagList}>
            {tags}
            <Tag variant={"monochrome-secondary"}>
              {articleData.creationData}
            </Tag>
            <Tag variant={"monochrome-secondary"}>
              {articleData.timeToRead} мин. чтения
            </Tag>
          </div>
          <ShareButton />
        </div>
        <div className={s.imgContainer}>
          <img src={articleData.mainPhoto} alt="" />
        </div>

        <FAQ faqData={faqData} className={s.faq} />
      </div>
      <FooterWithForm />
    </div>
  );
};
