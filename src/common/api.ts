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


const baseUrl = "https://octow.octoweb.ru/wp-json/api/v1"
const baseSeoUrl = "https://octow.octoweb.ru/wp-json/wp/v2"

export const api = {
    async getInteractionStages() {
        try {
            const response = await fetch(`${baseUrl}/interaction-stages`, { next: { revalidate: 60 } });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Не удалось загрузить этапы взаимодействия", error);
        }
    },
    async getTeamPhoto() {
        try {
            const response = await fetch(`${baseUrl}/team-options`, { next: { revalidate: 60 } });
            const data: Photo = await response.json();
            return data?.team_general_image;
        } catch (error) {
            console.error("Не удалось загрузить фото команды", error);
        }
    },
    //ABOUT
    async getTeam() {
        try {
            const response = await fetch(`${baseUrl}/team`, { next: { revalidate: 60 } });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Не удалось загрузить команду", error);
        }
    },
    //SERVICES
    async getServices() {
        try {
            const response = await fetch(`${baseUrl}/services`, { next: { revalidate: 60 } });
            const data: ServicesData[] = await response.json();
            return data;
        } catch (error) {
            console.error("Не удалось загрузить услуги", error);
        }
    },
    async getServiceCategory(id: string) {
        try {
            const response = await fetch(`${baseUrl}/services/category/${id}`, { next: { revalidate: 60 } });
            const data: ServiceCategoryPage = await response.json();
            if (data && 'code' in data) {
                return data
            }
            const formattedServicesList = data.child_services.map(service => {
                return {
                    header: service.title,
                    mainLink: data.serviceCategory + "/" + service.serviceId
                };
            });
            const formattedData: ServiceCategoryPage & {linksData: {header: string, mainLink: string}[]} = {...data, linksData: formattedServicesList};
            return formattedData;
        } catch (error) {
            console.error("Не удалось загрузить категорию услуг", error);
        }
    },
    async getService(id: string) {
        try {
            const response = await fetch(`${baseUrl}/services/${id}`, { next: { revalidate: 60 } });
            const data: ServicePageData = await response.json();
            return data;
        } catch (error) {
            console.error("Не удалось загрузить услуги", error);
        }
    },
    //CASES
    async getCases(page: number, filter: string | null) {
        const params = new URLSearchParams({page: String(page)});

        if (filter) {
            params.append("filter", filter);
        }

        try {
            const response = await fetch(`${baseUrl}/cases?${params.toString()}`);
            const data: CasesData = await response.json();
            return data;

        } catch (error) {
            console.error("Не удалось загрузить кейсы", error);
        }
    },
    async getCasesFilters() {
        try {
            const response = await fetch(`${baseUrl}/cases/filter`, { next: { revalidate: 60 } });
            const data: CasesFiltersData[] = await response.json();
            const filters = data.map(filter => filter.name);
            const filtersWithDefault = ["All projects", ...filters];
            return filtersWithDefault;

        } catch (error) {
            console.error("Не удалось загрузить фильтры", error);
        }
    },
    async getCase(caseId: string) {
        try {
            const response = await fetch(`${baseUrl}/cases/${caseId}`, { next: { revalidate: 60 } });
            const data: CasePageData = await response.json();
            return data

        } catch (error) {
            console.error("Не удалось загрузить кейс", error);
        }
    },
    //BLOG
    async getArticles(page: number, filter: string | null) {
        const params = new URLSearchParams({page: String(page)});

        if (filter) {
            params.append("filter", filter);
        }

        try {
            const response = await fetch(`${baseUrl}/posts?${params.toString()}`);
            const data: ArticleData = await response.json();
            return data

        } catch (error) {
            console.error("Не удалось загрузить статьи блога", error);
        }
    },
    async getArticlesFilters() {
        try {
            const response = await fetch(`${baseUrl}/posts/filter`, { next: { revalidate: 60 } });
            const data: ArticlesFilters = await response.json();

            const filters = data.categories.map(filter => filter.name);
            const filtersWithDefault = ["All", ...filters];
            return filtersWithDefault;
        } catch (error) {
            console.error("Не удалось загрузить фильтры", error);
        }
    },
    async getArticle(id: string) {
        try {
            const response = await fetch(`${baseUrl}/posts/${id}`, { next: { revalidate: 60 } });
            const data: ArticlePageData = await response.json();
            return data;
        } catch (error) {
            console.error("Не удалось загрузить статью", error);
        }
    },
//CONTACTS
    async getContacts() {
        try {
            const response = await fetch(`${baseUrl}/contacts`, { next: { revalidate: 60 } });
            const data: ContactsData = await response.json();
            return data
        } catch (error) {
            console.error("Не удалось загрузить контактную информацию", error);
        }
    },
//PRIVACY POLICY
    async getPrivacyPolicy() {
        try {
            const response = await fetch(`${baseUrl}/privacy-policy`, { next: { revalidate: 60 } });
            const data: PrivacyPolicyData = await response.json();
            return data
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
            const response = await fetch(`${baseUrl}/contact-form`, {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            return data

        } catch (error) {
            console.error("Неизвестная ошибка", error);
            return {message: "Произошла неизвестная ошибка"};
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
            const response = await fetch(`${baseUrl}/contact-form`, {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            return data
        } catch (error) {
            console.error("Неизвестная ошибка", error);
            return {message: "Произошла неизвестная ошибка"};
        }
    },
    //SEO
    async getMainSeo() {
        try {
            const response = await fetch(`${baseSeoUrl}/pages?slug=glavnaya`, { next: { revalidate: 60 } })
            const data: SEO[]  = await response.json()
            return data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getAboutSeo() {
        try {
            const response = await fetch(`${baseSeoUrl}/pages?slug=about`, { next: { revalidate: 60 } })
            const data: SEO[]  = await response.json()
            return data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getServicesSeo() {
        try {
            const response = await fetch(`${baseSeoUrl}/pages?slug=services`, { next: { revalidate: 60 } })
            const data: SEO[]  = await response.json()
            return data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getServicesCategorySeo(category: string) {
        try {
            const response = await fetch(`${baseSeoUrl}/service_category?slug=${category}`, { next: { revalidate: 60 } })
            const data: SEO[]  = await response.json()
            return data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getServiceSeo(id: string) {
        try {
            const response = await fetch(`${baseSeoUrl}/services?slug=${id}`, { next: { revalidate: 60 } })
            const data: SEO[]  = await response.json()
            return data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getCasesSeo() {
        try {
            const response = await fetch(`${baseSeoUrl}/pages?slug=cases`, { next: { revalidate: 60 } })
            const data: SEO[]  = await response.json()
            const meta = data?.[0]?.yoast_head;
            const schema = data?.[0]?.yoast_head_json.schema;
            return {meta, schema};
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getCaseSeo(id: string) {
        try {
            const response = await fetch(`${baseSeoUrl}/cases?slug=${id}`, { next: { revalidate: 60 } })
            const data: SEO[]  = await response.json()
            return data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getBlogSeo() {
        try {
            const response = await fetch(`${baseSeoUrl}/pages?slug=blog`, { next: { revalidate: 60 } })
            const data: SEO[]  = await response.json()
            const meta = data?.[0]?.yoast_head;
            const schema = data?.[0]?.yoast_head_json.schema;
            return {meta, schema};
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getArticleSeo(id: string) {
        try {
            const response = await fetch(`${baseSeoUrl}/posts?slug=${id}`, { next: { revalidate: 60 } })
            const data: SEO[] = await response.json()
            return data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    },
    async getContactsSeo() {
        try {
            const response = await fetch(`${baseSeoUrl}/pages?slug=contacts`, { next: { revalidate: 60 } })
            const data: SEO[]  = await response.json()
            return data?.[0]?.yoast_head_json;
        } catch (error) {
            console.error("Не удалось загрузить SEO данные", error);
        }
    }
};