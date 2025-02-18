import axios from "axios";
import {
    ArticleData,
    ArticlePageData,
    ArticlesFilters,
    CasePageData,
    CasesData,
    CasesFiltersData,
    ContactsData,
    Photo,
    PrivacyPolicyData,
    SEO,
    ServiceCategoryPage,
    ServicePageData,
    ServicesData
} from "@/common/types";
import {FormValues} from "@/components/layouts/form/form";

const instance = axios.create({
    baseURL: "https://octow.octoweb.ru/wp-json/api/v1",
});

const seoInstance = axios.create({
    baseURL: "https://octow.octoweb.ru/wp-json/wp/v2/",
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
    async getTeamPhoto() {
        try {
            const response = await instance.get<Photo>("/team-options");
            return response.data?.team_general_image;
        } catch (error) {
            console.error("Не удалось загрузить фото команды", error);
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
                    mainLink: response.data.serviceCategory + "/" + service.serviceId
                };
            });
            const formattedData = {...response.data, linksData: formattedServicesList};
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
        const params = filter ? {page, filter} : {page};
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
        const params = filter ? {page, filter} : {page};
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
//PRIVACY POLICY
    async getPrivacyPolicy() {
        try {
            const response = await instance.get<PrivacyPolicyData>("/privacy-policy");
            return response.data;
        } catch (error) {
            console.error("Не удалось загрузить политику конфиденциальности", error);
        }
    },

//POST
    async postForm(form: FormValues) {
        const formData = new FormData();
        formData.append("form_id", "contact-page");

        Object.entries(form).forEach(([key, value]) => {
            if (value instanceof FileList) {
                formData.append(`data[${key}]`, value[0]);
            } else {
                formData.append(`data[${key}]`, String(value));
            }
        });

        const validationToken = await new Promise<string | undefined>((resolve) => {
            grecaptcha.ready(() => {
                grecaptcha.execute("6Le0rM0qAAAAAIF-8ZPeA5_0RThCMWK1E_PIiv6c", {action: "submit"})
                    .then((token: string) => {
                        resolve(token);
                    });
            });
        });

        formData.append("g-recaptcha-response", validationToken || "");

        try {
            const response = await instance.post("/contact-form", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Не удалось отправить форму", error.response?.data);
                return error.response?.data;
            } else {
                console.error("Неизвестная ошибка", error);
                return {message: "Произошла неизвестная ошибка"};
            }
        }
    },
    async postBrief(form: Record<string, Record<string, unknown>>) {
        const formData = new FormData();
        formData.append("form_id", "brief");
        Object.entries(form).forEach(([key, value]) => {
            Object.entries(value).forEach(([subKey, subValue]) => {
                if (subKey === "technicalSpecification" || subKey === "additionalFiles") {
                    if (Array.isArray(subValue) && subValue.length > 0) {
                        for (const file of subValue) {
                            formData.append(`data[${key}][${subKey}]`, file);
                        }
                    } else {
                        formData.append(`data[${key}][${subKey}]`, "");
                    }
                } else {
                    formData.append(`data[${key}][${subKey}]`, String(subValue ?? ""));
                }
            });
        });

        const validationToken = await new Promise<string | undefined>((resolve) => {
            grecaptcha.ready(() => {
                grecaptcha.execute("6Le0rM0qAAAAAIF-8ZPeA5_0RThCMWK1E_PIiv6c", {action: "submit"})
                    .then((token: string) => {
                        resolve(token);
                    });
            });
        });

        formData.append("g-recaptcha-response", validationToken || "");

        try {
            const response = await instance.post("/contact-form", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Не удалось отправить форму", error.response?.data);
                return error.response?.data;
            } else {
                console.error("Неизвестная ошибка", error);
                return {message: "Произошла неизвестная ошибка"};
            }
        }
    },
    //SEO
    async getMainSeo() {
        try {
            const response = await seoInstance.get<SEO[]>(`/pages?slug=glavnaya`);
            return response.data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getAboutSeo() {
        try {
            const response = await seoInstance.get<SEO[]>(`/pages?slug=about`);
            return response.data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getServicesSeo() {
        try {
            const response = await seoInstance.get<SEO[]>(`/pages?slug=services`);
            return response.data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getServicesCategorySeo(category: string) {
        try {
            const response = await seoInstance.get<SEO[]>(`/service_category?slug=${category}`);
            return response.data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getServiceSeo(id: string) {
        try {
            const response = await seoInstance.get<SEO[]>(`/services?slug=${id}`);
            return response.data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getCasesSeo() {
        try {
            const response = await seoInstance.get<SEO[]>(`/pages?slug=cases`);
            const meta = response.data?.[0]?.yoast_head;
            const schema = response.data?.[0]?.yoast_head_json.schema;
            return {meta, schema};
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getCaseSeo(id: string) {
        try {
            const response = await seoInstance.get<SEO[]>(`/cases?slug=${id}`);
            return response.data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getBlogSeo() {
        try {
            const response = await seoInstance.get<SEO[]>(`/pages?slug=blog`);
            const meta = response.data?.[0]?.yoast_head;
            const schema = response.data?.[0]?.yoast_head_json.schema;
            return {meta, schema};
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getArticleSeo(id: string) {
        try {
            const response = await seoInstance.get<SEO[]>(`/posts?slug=${id}`);
            return response.data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getContactsSeo() {
        try {
            const response = await seoInstance.get<SEO[]>(`/pages?slug=contacts`);
            return response.data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    }
};