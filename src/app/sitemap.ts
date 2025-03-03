import type { MetadataRoute } from "next";
import { api } from "@/common/api";

async function getAllArticles() {
  let page = 1;
  let allArticles: { url: string }[] = [];
  while (true) {
    const articlesData = await api.getArticles(page, null);
    if (!articlesData || articlesData.posts.length === 0) break;
    const articlesPage = articlesData.posts.map((article) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${article.slug}`,
    }));
    allArticles = [...allArticles, ...articlesPage];
    page++;
  }
  return allArticles;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  const casesData = await api.getCases(1, null);
  const cases =
    casesData?.caseCircles.map((circle) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/cases/${circle.caseId}`,
    })) || [];

  const servicesData = await api.getServices();
  const serviceCategories =
    servicesData?.map((service) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${service.url}`,
    })) || [];
  const services: { url: string }[] = [];
  servicesData?.forEach((category) => {
    category.child_services.forEach((service) => {
      services.push({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${category.url}/${service.serviceId}`,
      });
    });
  });

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },
    ...serviceCategories,
    ...services,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/cases`,
    },
    ...cases,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },
    ...articles,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contacts`,
    },
  ];
}
