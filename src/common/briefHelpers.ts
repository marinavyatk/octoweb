//types
export type FieldType = {
  required: boolean;
  label: string;
  placeholder?: string;
  currentValue?: string;
};

export type Field = {
  [key: string]: FieldType;
};

export type SectionName =
  | 'contactInfo'
  | 'about'
  | 'details'
  | 'targetGroup'
  | 'materials'
  | 'additionalInfo';

export type AllFields = Record<SectionName, Field>;

export type DirtyField = {
  [key: string]: boolean | boolean[] | undefined;
};


//constants
export const allFields: AllFields = {
  contactInfo: {
    name: {required: true, label: 'Как к Вам обращаться?', placeholder: ''},
    position: {required: false, label: 'Должность', placeholder: ''},
    tel: {required: true, label: 'Номер телефона', placeholder: ''},
    email: {required: true, label: 'email', placeholder: ''},
    communicationWay: {
      required: false,
      label: 'Предпочитаемый способ связи',
    },
  },
  about: {
    companyName: {
      required: true,
      label: 'Название компании',
      placeholder: '',
    },
    semantics: {
      required: false,
      label: 'Семантика названия',
      placeholder:
        'Семантическое значение названия компании, которое поможет лучше понять суть бренда и подчеркнуть сильные стороны',
    },
    field: {required: true, label: 'Ниша', placeholder: ''},
    productsAndServices: {
      required: true,
      label: 'Ряд продуктов и услуг',
      placeholder: '',
    },
    productsAndServicesDescription: {
      required: true,
      label: 'Описание продукта или услуги',
      placeholder: 'Подробное описание основных услуг, указанных в предыдущем пункте',
    },
    priorityProductsAndServices: {
      required: true,
      label: 'Приоритетные товары и услуги',
      placeholder: '',
    },
    offerUniqueness: {
      required: true,
      label: 'Уникальность предложения',
      placeholder: 'Краткое описание фишки и уникальности бренда',
    },
    disadvantages: {
      required: true,
      label: 'Недостатки услуги или продукта',
      placeholder: '',
    },
    geography: {
      required: true,
      label: 'География продукта/услуги',
      placeholder: 'В каких регионах/ городах / странах представлены услуги или продукт',
    },
    shortCompanyInfo: {
      required: false,
      label: 'Краткая информация о компании',
      placeholder: '',
    },
    site: {
      required: false,
      label: 'Сайт компании (если есть)',
      placeholder: 'Введите сайт компании, если он существует',
    },
    socialNetworks: {
      required: false,
      label: 'Социальные сети',
      placeholder: 'Прикрепите ссылки на социальные сети, если они есть',
    },
    competitors: {
      required: true,
      label: 'Прямые конкуренты',
      placeholder: '',
    },
  },
  details: {
    siteType: {required: true, label: 'Тип сайта'},
    goals: {
      required: true,
      label: 'Цели, которые должен решить сайт',
      placeholder: 'Например: увеличить конверсию, рассказать о бизнесе, привлечь и т.д.',
    },
    usersTargetAction: {
      required: true,
      label: 'Целевое действие пользователя',
    },
    competitorsSites: {
      required: true,
      label: 'Сайты конкурентов',
      placeholder: 'Укажите сайты прямых или смежных конкурентов, минимум 3',
    },
    advantagesCompetitorsSites: {
      required: true,
      label: 'Чем нравятся сайты конкурентов',
      placeholder: 'Укажите сильные стороны сайтов конкурентов',
    },
    disadvantagesCompetitorsSites: {
      required: true,
      label: 'Чем не нравятся сайты конкурентов',
      placeholder: 'Укажите, что не нравится на сайтах конкурентов',
    },
    sitesYouLike: {
      required: false,
      label: 'Сайты, которые нравятся',
      placeholder: 'Сайты не конкурентов, которые вам нравятся, и почему',
    },
    sitesYouDislike: {
      required: false,
      label: 'Сайты, которые не нравятся',
      placeholder: 'Сайты не конкурентов, которые вам не нравятся, и почему',
    },
    preferredColors: {
      required: false,
      label: 'Предпочитаемые цвета',
      placeholder: 'Укажите предпочтения в цвете, если они есть',
    },
    unwantedColors: {
      required: false,
      label: 'Нежелательные цвета',
      placeholder: 'Укажите цвета, которые не подходит вашему продукту',
    },
    siteFunctionality: {
      required: true,
      label: 'Планируемый функционал сайта',
    },
    specificSystem: {
      required: false,
      label: 'Есть ли определенная CMS система, на которой нужно сделать сайт?',
      placeholder: 'Например Tilda, WordPress и др.',
    },
    seo: {required: true, label: 'SEO-Оптимизация'},
    copywriting: {required: true, label: 'Копирайтинг'},
  },
  targetGroup: {
    knowTargetAudience: {required: true, label: 'Знаете ли вы свою ЦА'},
    sex: {
      required: true,
      label: 'Пол',
      placeholder: 'Например — 80% М',
    },
    age: {
      required: true,
      label: 'Возраст',
      placeholder: 'Например — 35-45 лет',
    },
    income: {
      required: true,
      label: 'Достаток',
      placeholder: 'Гипотетический доход пользователя, средняя месячная зарплата',
    },
    interests: {
      required: true,
      label: 'Интересы',
      placeholder: 'Чем интересуется целевая аудитория, например — спорт, туризм и т.д.',
    },
    useInteractionStages: {
      required: true,
      label: 'Этапы взаимодействия пользователя с продуктом',
      placeholder: 'Опишите путь пользователя от контакта до заказа',
    },
    communicationChannels: {
      required: false,
      label: 'Каналы коммуникации с ЦА',
      placeholder: 'Телефонный звонок, переписка в мессенджерах, почта, соц. сети и т.д.',
    },
    intensityOfUse: {
      required: true,
      label: 'Интенсивность употребления',
      placeholder: 'Как часто будет совершаться повторная покупка/заказ',
    },
  },
  materials: {
    materialsDevelopment: {
      required: true,
      label: 'Требуется ли разработка дополнительных материалов',
    },
    materialsToDevelop: {
      required: true,
      label: 'Перечислите материалы, которые нужно разработать',
      placeholder: 'Логотип, фирменный стиль, буклеты, иллюстрации',
    },
  },
  additionalInfo: {
    numberOfLanguageVersions: {
      required: true,
      label: 'Кол-во языковых версий',
    },
    budget: {
      required: true,
      label: 'Планируемый или рассчитанный бюджет',
      placeholder: 'Например: 100-200 т.р.',
    },
    technicalSpecificationAvailable: {
      required: true,
      label: 'Есть ли Техническое Задание',
    },
    technicalSpecification: {required: false, label: 'Прикрепите ТЗ'},
    siteAdministration: {
      required: true,
      label: 'Требуется ли администрирование сайта после запуска',
    },
    additionalInfo: {
      required: false,
      label: 'Дополнительная информация',
      placeholder: 'Дополнительная информация по проекту',
    },
    additionalFiles: {required: false, label: 'Дополнительные файлы'},
  },
};

export const defaultBriefValues= {
  contactInfo: {
    name: '',
    position: '',
    tel: '',
    email: '',
    communicationWay: [],
  },
  about: {
    companyName: '',
    semantics: '',
    field: '',
    productsAndServices: '',
    productsAndServicesDescription: '',
    priorityProductsAndServices: '',
    offerUniqueness: '',
    disadvantages: '',
    geography: '',
    shortCompanyInfo: '',
    site: '',
    socialNetworks: '',
    competitors: '',
  },
  details: {
    siteType: 'landing',
    goals: '',
    usersTargetAction: [],
    competitorsSites: '',
    advantagesCompetitorsSites: '',
    disadvantagesCompetitorsSites: '',
    sitesYouLike: '',
    sitesYouDislike: '',
    preferredColors: '',
    unwantedColors: '',
    siteFunctionality: [],
    specificSystem: '',
    seo: 'yes',
    copywriting: 'yes',
  },
  targetGroup: {
    knowTargetAudience: 'yes',
    sex: '',
    age: '',
    income: '',
    interests: '',
    useInteractionStages: '',
    communicationChannels: '',
    intensityOfUse: '',
  },
  materials: {
    materialsDevelopment: 'yes',
    materialsToDevelop: '',
  },
  additionalInfo: {
    numberOfLanguageVersions: '1',
    budget: '',
    technicalSpecificationAvailable: 'yes',
    technicalSpecification: {} as FileList,
    siteAdministration: 'yes',
    additionalInfo: '',
    additionalFiles: {} as FileList,
  },
}