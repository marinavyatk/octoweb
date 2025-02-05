import axios from "axios";
import {
  ArticleData,
  ArticlePageData, ArticlesFilters,
  CasePageData,
  CasesData,
  CasesFiltersData,
  ContactsData, ServiceCategoryPage,
  ServicePageData, ServicesData
} from "@/common/types";
import { FormValues } from "@/components/layouts/form/form";

const instance = axios.create({
  baseURL: "https://octow.octoweb.ru/wp-json/api/v1"
});

export const api = {
  async getInteractionStages() {
    try {
      const response = await instance.get("/interaction-stages");
      return response.data;
    } catch (error) {
      console.error("Не удалось загрузить этапы взаимодействия", error);
    }
  },
  //ABOUT
  async getTeam() {
    try {
      const response = await instance.get("/team");
      return response.data;
    } catch (error) {
      console.error("Не удалось загрузить команду", error);
    }
  },
  //SERVICES
  async getServices() {
    try {
      const response = await instance.get<ServicesData[]>(`/services`);
      return response.data;
    } catch (error) {
      console.error("Не удалось загрузить услуги", error);
    }
  },
  async getServiceCategory(id: string) {
    try {
      const response = await instance.get<ServiceCategoryPage>(`/services/category/${id}`);

      const formattedServicesList = response.data.child_services.map(service => {
        return {
          header: service.title,
          mainLink: response.data.serviceCategory + "/" + service.serviceId,
        };
      });
      const formattedData = { ...response.data, linksData: formattedServicesList };
      return formattedData;
    } catch (error) {
      console.error("Не удалось загрузить категорию услуг", error);
    }
  },
  async getService(id: string) {
    try {
      const response = await instance.get<ServicePageData>(`/services/${id}`);
      return response.data;
    } catch (error) {
      console.error("Не удалось загрузить услуги", error);
    }
  },
  //CASES
  async getCases(page: number, filter: string | null) {
    const params = filter ? { page, filter } : { page };
    try {
      const response = await instance.get<CasesData>("/cases", {
        params: params
      });
      return response.data;

    } catch (error) {
      console.error("Не удалось загрузить кейсы", error);
    }
  },
  async getCasesFilters() {
    try {
      const response = await instance.get<CasesFiltersData[]>("/cases/filter");
      const filters = response.data.map(filter => filter.name);
      const filtersWithDefault = ["All projects", ...filters];
      return filtersWithDefault;

    } catch (error) {
      console.error("Не удалось загрузить фильтры", error);
    }
  },
  async getCase(caseId: string) {
    try {
      const response = await instance.get<CasePageData>(`/cases/${caseId}`);
      return response.data;

    } catch (error) {
      console.error("Не удалось загрузить кейс", error);
    }
  },
  //BLOG
  async getArticles(page: number, filter: string | null) {
    const params = filter ? { page, filter } : { page };
    try {
      const response = await instance.get<ArticleData>("/posts", {
        params: params
      });
      return response.data;
    } catch (error) {
      console.error("Не удалось загрузить статьи блога", error);
    }
  },
  async getArticlesFilters() {
    try {
      const response = await instance.get<ArticlesFilters>("/posts/filter");
      const filters = response.data.categories.map(filter => filter.name);
      const filtersWithDefault = ["All", ...filters];
      return filtersWithDefault;
    } catch (error) {
      console.error("Не удалось загрузить фильтры", error);
    }
  },
  async getArticle(id: string) {
    try {
      const response = await instance.get<ArticlePageData>(`/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error("Не удалось загрузить статью", error);
    }
  },
//CONTACTS
  async getContacts() {
    try {
      const response = await instance.get<ContactsData>("/contacts");
      return response.data;
    } catch (error) {
      console.error("Не удалось загрузить контактную информацию", error);
    }
  },
  //POST
  async postForm(form: FormValues) {
    try {
      const response = await instance.post("/contact-form", {form_id: 'contact-page', data: form});
      return response.data;
    } catch (error) {
      console.error("Не удалось отправить форму", error);
      return error
    }
  }
};