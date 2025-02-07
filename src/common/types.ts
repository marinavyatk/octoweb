import { ServicesLinkProps } from "@/components/layouts/servicesLink/servicesLink";
import { WordSwipeProps } from "@/components/ui/wordSwipe/wordSwipe";
import { LngLat } from "@yandex/ymaps3-types";
import { CaseCircle } from "@/components/layouts/caseCircle/caseCircle";
import { allFields } from "@/common/briefHelpers";
import { getBriefSchema } from "@/common/validation";
import { z } from "zod";

export type TagLink = {
  text: string;
  subLink: string;
};

export type linkData = Omit<ServicesLinkProps, "number"> & { number?: string };

export type TextContent = {
  firstLine: string,
  secondLine: string,
  thirdLine: string,
  wordSwipeProps: WordSwipeProps
}

//SERVER RESPONSES
//SERVICES
export type ServicesData = {
  id: number,
  title: string,
  url: string,
  image: string,
  child_services: ChildService[],
  service_number: string
}

export type ChildService = {
  title: string,
  cost: string,
  serviceId: string,
}

export type ServiceCategoryPage = {
  id: number,
  title: string,
  url: string,
  service_number: string
  description: string,
  image: string,
  child_services: CategoryServices[],
  serviceCategory: string,
  firstLine: string,
  secondLine: string,
  thirdLine: string,
  words: string[],
  faq: Faq[],
}

export type CategoryServices = {
  title: string,
  serviceId: string,
}

export type ServicePageData = {
  id: number,
  title: string,
  first_description: string,
  image: string,
  for_whom_title: string,
  for_whom: string[],
  content: string,
  team: TeamMemberData[],
  team_section_text: string,
  cost: string,
  additional_services: AdditionalService[]
  faq: Faq[],
  // interaction_stages: []
}

export type AdditionalService = {
  name: string,
  price: string,
}

export type TeamMemberData = {
  id: number,
  experience: string,
  name: string,
  position: string,
  description: string,
  image: string,
}

export type Faq = {
  question: string,
  answer: string,
}

//CASES
export type CasesData = {
  caseCircles: CaseCircle[];
  cases: CaseData[],
  total: number,
}

export type CaseData = {
  caseId: string,
  category: string,
  header: string,
  img: string,
  imgFullWidth: string,
  services: string[],
  projectCategories: string[],
}

export type CasesFiltersData = {
  id: string,
  name: string,
}

export type CasePageData = {
  id: number,
  title: string,
  services: string[],
  scope: string,
  website_url: {
    url: string,
    name: string,
  },
  image: string,//remove
  customer_logo: string, //remove
  description: string,
  task: string,
  images: {
    main: string,
    small: string,
    medium: string,
    big: string,
  },
  tech_stack: string,
  project_text: string,
}

//BLOG
export type ArticleData = {
  posts: Article[],
  total: number
}

export type Article = {
  id: number,
  categories: string[],
  date: string,
  excerpt: string,
  image: string,
  title: string,
  slug: string,
}

export type ArticlesFilters = {
  categories: { name: string }[]
}

export type ArticlePageData = {
  id: number,
  categories: string[],
  date: string,
  image: string,
  title: string,
  reading_time: string,
  content: string,
  faq: { question: string; answer: string }[],
}

//CONTACTS
export type ContactsData = {
  working_hours: string;
  address: string;
  phone: string;
  email: string;
  social_links: Social[];
  map_coordinates: LngLat
  map_place_coordinates: LngLat
}

export type Social = {
  name: string;
  url: string;
}

// export type ErrorsFromServer = RequestErrors | ServerErrors

export type RequestErrors = {
  code: string,
  message: string,
  data: {
    status: number,
    errors: {
      name: string,
      email: string,
      tel: string,
      projectDescription: string,
      projectDescriptionFile: string,
      mailing: string
    }
  }
}

export type ServerErrors = {
  code: string,
  message: string,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const briefSchema = getBriefSchema(allFields);
export type BriefValues = Partial<z.infer<typeof briefSchema>>;