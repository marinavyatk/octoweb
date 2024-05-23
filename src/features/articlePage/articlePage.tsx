import s from "./articlePage.module.scss";
import { Header } from "../../components/ui/complex/header/header.tsx";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import SemanticArticleCover from "../../assets/webp/blogImgSemantic.png";
import { Tag } from "../../components/ui/primitive/tag/tag.tsx";
import { ShareButton } from "../../components/ui/primitive/shareButton/shareButton.tsx";
import { FAQ, faqData } from "../../components/ui/complex/faq/faq.tsx";
import ArticleImg1 from "../../assets/webp/articleImg1.png";
import { ElementType } from "react";
import ArticleImg2 from "../../assets/webp/articleImg2.png";
import ArticleImg3 from "../../assets/webp/articleImg3.png";
import ArticleImg4 from "../../assets/webp/articleImg4.png";

const articleData = {
  mainHeader: "Как собрать семантику самому, без парсеров",
  tags: ["SEO", "Ads"],
  creationData: "14 Мая, 2024",
  timeToRead: "5",
  mainPhoto: SemanticArticleCover,
  articleContent: [
    {
      sectionHeader: "Введение",
      sectionImg: undefined,
      sectionContent: [
        {
          as: "p",
          text: "В современном мире объем данных, создаваемых и потребляемых каждым из нас, растет в геометрической прогрессии. Понимание и анализ этих данных становятся ключевыми навыками в различных областях, от маркетинга до научных исследований. Однако, инструменты для анализа семантики текста, такие как парсеры, могут быть дорогостоящими или труднодоступными. В этой статье мы исследуем методы создания собственной семантической модели без использования парсеров, что позволит вам анализировать тексты более эффективно и недорого.",
        },
      ],
    },
    {
      sectionHeader: "Определение Цели Анализа",
      sectionImg: ArticleImg1,
      sectionContent: [
        {
          as: "p",
          text: "Первым шагом при создании семантической модели является определение цели анализа. Разные задачи могут требовать разных подходов к сбору и анализу данных. Рассмотрим основные цели анализа текста:",
        },
        {
          as: "h3",
          text: "Определение ключевых тем и идей",
        },
        {
          as: "p",
          text: "Определение основных тем и идей, заложенных в тексте, является одной из наиболее распространенных задач анализа семантики. Это может быть полезно при категоризации и организации больших объемов текста, таких как статьи блога, научные статьи или отзывы пользователей.",
        },
        {
          as: "h3",
          text: "Анализ настроений и эмоций",
        },
        {
          as: "p",
          text: "Другая важная задача - анализ настроений и эмоций, выраженных в тексте. Это может быть полезно для мониторинга общественного мнения о продукте или услуге, а также для оценки эмоциональной окраски текстов в социальных сетях.",
        },
        {
          as: "h3",
          text: "Извлечение информации",
        },
        {
          as: "p",
          text: "Иногда необходимо извлечь конкретные факты или информацию из текста, такую как имена, даты, места и т.д. Это может быть полезно для автоматической обработки и анализа текстовых данных, например, при создании базы данных новостных статей.",
        },
      ],
    },
    {
      sectionHeader: "Сбор данных",
      sectionImg: ArticleImg2,
      sectionContent: [
        {
          as: "p",
          text: "После определения цели анализа следующим шагом является сбор данных. Существует несколько способов собрать текстовые данные для анализа:",
        },
        {
          as: "h3",
          text: "Вручную",
        },
        {
          as: "p",
          text: "Сбор данных вручную может быть выполнен путем чтения и сбора текстов из различных источников, таких как веб-страницы, документы или социальные сети. Этот метод подходит для небольших объемов данных или в случае, когда требуется специализированная информация, недоступная для автоматического сбора.",
        },
        {
          as: "h3",
          text: "Автоматизированный сбор",
        },
        {
          as: "p",
          text: "Для сбора больших объемов данных более эффективно использовать автоматизированные методы, такие как веб-скрапинг или API. Веб-скрапинг позволяет извлекать текстовую информацию с веб-страниц, а API обеспечивают доступ к данным из различных онлайн-ресурсов.",
        },
      ],
    },
    {
      sectionHeader: "Предварительная обработка текста",
      sectionImg: ArticleImg3,
      sectionContent: [
        {
          as: "p",
          text: "После сбора данных необходимо провести предварительную обработку текста, включающую в себя следующие шаги:",
        },
        {
          as: "h3",
          text: "Удаление стоп-слов",
        },
        {
          as: "p",
          text: "Стоп-слова - это слова, которые не несут смысловой нагрузки и могут быть безвредно удалены из текста без потери информации.",
        },
        { as: "h3", text: "Лемматизация" },
        {
          as: "p",
          text: 'Лемматизация - это процесс приведения слов к их базовой форме или лемме. Например, слова "бегу", "бежишь" и "бежит" будут приведены к лемме "бежать".',
        },
        { as: "h3", text: "Токенизация" },
        {
          as: "p",
          text: "Токенизация - это процесс разделения текста на отдельные слова или токены. Это позволяет анализировать текст на уровне отдельных слов или фраз.",
        },
      ],
    },
    {
      sectionHeader: "Анализ семантики",
      sectionImg: ArticleImg4,
      sectionContent: [
        {
          as: "p",
          text: "После предварительной обработки текста можно приступить к анализу семантики с использованием различных методов:",
        },
        { as: "h3", text: "Мешок слов (Bag of Words)" },
        {
          as: "p",
          text: 'Метод "Мешок слов" предполагает представление текста в виде мешка отдельных слов, игнорируя их порядок. Это позволяет оценивать важность каждого слова в тексте.',
        },
        {
          as: "h3",
          text: "TF-IDF (Term Frequency-Inverse Document Frequency)",
        },
        {
          as: "p",
          text: "TF-IDF - это статистический метод, который оценивает важность слова в контексте документа и корпуса документов в целом. Он учитывает как частоту встречаемости слова в документе (TF), так и обратную частоту его встречаемости в других документах (IDF).",
        },
        { as: "h3", text: "Машинное обучение" },
        {
          as: "p",
          text: "Методы машинного обучения, такие как классификация и кластеризация, могут быть также использованы для анализа семантики текста. Эти методы позволяют автоматически выявлять паттерны и структуры в текстовых данных.",
        },
      ],
    },
    {
      sectionHeader: "Визуализация результатов",
      sectionContent: [
        {
          as: "p",
          text: "Наконец, визуализация результатов анализа поможет вам лучше понять полученные данные и сделать выводы:",
        },
        { as: "h3", text: "Облако тегов (Tag Cloud)" },
        {
          as: "p",
          text: "Облако тегов - это визуализация, которая показывает важность каждого слова в тексте путем отображения его размера или цвета.",
        },
        { as: "h3", text: "Графики и диаграммы" },
        {
          as: "p",
          text: "Графики и диаграммы могут быть использованы для визуализации статистических данных, таких как распределение частоты слов или эмоциональная окраска текста.",
        },
      ],
    },
    {
      sectionHeader: "Заключение",
      sectionContent: [
        {
          as: "p",
          text: "В этой статье мы рассмотрели основные шаги создания собственной семантической модели без использования парсеров. Несмотря на то, что это требует некоторых усилий и знаний, возможность самостоятельно анализировать тексты открывает огромные возможности для исследования и понимания информации в современном мире. Следуйте нашим советам и экспериментируйте - вы удивитесь результатам, которые сможете достичь своими собственными силами.",
        },
      ],
    },
  ],
};

export const ArticlePage = () => {
  const tags = articleData.tags.map((tag) => {
    return (
      <Tag key={tag} variant={"colored"} className={s.tag}>
        {tag}
      </Tag>
    );
  });

  const articleContent = articleData.articleContent.map((section) => {
    return (
      <section className={s.articleSection}>
        <div className={s.articleText}>
          <h2>{section.sectionHeader}</h2>
          {section.sectionContent.map((textEl) => {
            const Element = textEl.as as ElementType;
            return (
              <Element className={s[textEl.as + "Element"]}>
                {textEl.text}
              </Element>
            );
          })}
        </div>
        {section.sectionImg && (
          <div className={s.imgContainer}>
            <img src={section.sectionImg} alt="" />
          </div>
        )}
      </section>
    );
  });

  return (
    <div className={s.articlePage}>
      <Header />
      <div className={s.articleContent}>
        <h1>{articleData.mainHeader}</h1>
        <div className={s.caption}>
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
        <div className={s.article}>
          {articleContent}
          <div className={s.caption + " " + s.bottomCaption}>
            <div className={s.tagList}>
              {tags}
              <Tag variant={"monochrome-secondary"}>
                {articleData.creationData}
              </Tag>
            </div>
            <ShareButton />
          </div>
        </div>
        <FAQ faqData={faqData} className={s.faq} />
      </div>
      <FooterWithForm />
    </div>
  );
};
