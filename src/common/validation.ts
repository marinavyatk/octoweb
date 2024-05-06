import {z} from 'zod';

//common
const requiredString = z.string().min(1, {message: 'Это обязательное поле'}).max(500, 'Максимум 500 символов');
const optionalString = z.string().max(500, 'Максимум 500 символов');
const checkboxGroupRequired = z.string().array().nonempty({message: 'Выберите хотя бы один вариант'})
const checkboxGroupOptional = z.string().array().optional()
const radio = z.string() //temp
const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB

const fileSchema = z.custom<
    FileList>()
    .refine((fileList) => {
        if (fileList[0] === undefined) return true;
        return fileList[0] && fileList[0]?.size <= MAX_UPLOAD_SIZE;
    }, 'Размер файла не более 5mb')
const multipleFilesSchema = z.custom<FileList>().optional()

const defineSchema = (fieldName: FieldType) => {
    return fieldName.required ? requiredString : optionalString
}
//for form


export const formSchema = z.object({
    name: requiredString,
    email: requiredString.email(),
    tel: requiredString,
    projectDescription: requiredString,
    projectDescriptionFile: fileSchema,
    mailing: z.boolean()
})

//for brief
type FieldType = {
    required: boolean,
    label: string,
    placeholder?: string
}
type Field = {
    [key: string]: FieldType
}
export type SectionName = 'contactInfo' | 'about' | 'details' | 'targetGroup' | 'materials' | 'additionalInfo'
export type AllFields = Record<SectionName, Field>

export const allFields: AllFields = {
    contactInfo: {
        name: {required: true, label: 'Как к Вам обращаться?', placeholder: ''},
        position: {required: false, label: 'Должность', placeholder: ''},
        tel: {required: true, label: 'Номер телефона', placeholder: ''},
        email: {required: true, label: 'email', placeholder: ''},
        communicationWay: {required: false, label: 'Предпочитаемый способ связи'},
    },
    about: {
        companyName: {required: true, label: 'Название компании', placeholder: ''},
        semantics: {required: false, label: 'Семантика названия', placeholder: 'Семантическое значение названия компании, которое поможет лучше понять суть бренда и подчеркнуть сильные стороны'},
        field: {required: true, label: 'Ниша', placeholder: ''},
        productsAndServices: {required: true, label: 'Ряд продуктов и услуг', placeholder: ''},
        productsAndServicesDescription: {required: true, label: 'Описание продукта или услуги', placeholder: 'Подробное описание основных услуг, указанных в предыдущем пункте'},
        priorityProductsAndServices: {required: true, label: 'Приоритетные товары и услуги', placeholder: ''},
        offerUniqueness: {required: true, label: 'Уникальность предложения', placeholder: 'Краткое описание фишки и уникальности бренда'},
        disadvantages: {required: true, label: 'Недостатки услуги или продукта', placeholder: ''},
        geography: {required: true, label: 'География продукта/услуги', placeholder: 'В каких регионах/ городах / странах представлены услуги или продукт'},
        shortCompanyInfo: {required: false, label: 'Краткая информация о компании', placeholder: ''},
        site: {required: false, label: 'Сайт компании (если есть)', placeholder: 'Введите сайт компании, если он существует'},
        socialNetworks: {required: false, label: 'Социальные сети', placeholder: 'Прикрепите ссылки на социальные сети, если они есть'},
        competitors: {required: true, label: 'Прямые конкуренты', placeholder: ''}
    },
    details: {
        siteType: {required: true, label: 'Тип сайта'},
        goals: {required: true, label: 'Цели, которые должен решить сайт', placeholder: 'Например: увеличить конверсию, рассказать о бизнесе, привлечь и т.д.'},
        usersTargetAction: {required: true, label: 'Целевое действие пользователя'},
        competitorsSites: {required: true, label: 'Сайты конкурентов', placeholder: 'Укажите сайты прямых или смежных конкурентов, минимум 3'},
        advantagesCompetitorsSites: {required: true, label: 'Чем нравятся сайты конкурентов', placeholder: 'Укажите сильные стороны сайтов конкурентов'},
        disadvantagesCompetitorsSites: {required: true, label: 'Чем не нравятся сайты конкурентов', placeholder: 'Укажите, что не нравится на сайтах конкурентов'},
        sitesYouLike: {required: false, label: 'Сайты, которые нравятся', placeholder: 'Сайты не конкурентов, которые вам нравятся, и почему'},
        sitesYouDislike: {required: false, label: 'Сайты, которые не нравятся', placeholder: 'Сайты не конкурентов, которые вам не нравятся, и почему'},
        preferredColors: {required: false, label: 'Предпочитаемые цвета', placeholder: 'Укажите предпочтения в цвете, если они есть'},
        unwantedColors: {required: false, label: 'Нежелательные цвета', placeholder: 'Укажите цвета, которые не подходит вашему продукту'},
        siteFunctionality: {required: true, label: 'Планируемый функционал сайта'},
        specificSystem: {required: false, label: 'Есть ли определенная CMS система, на которой нужно сделать сайт?', placeholder: 'Например Tilda, WordPress и др.'},
        seo: {required: true, label: 'SEO-Оптимизация'},
        copywriting: {required: true, label: 'Копирайтинг'},
    },
    targetGroup: {
        knowTargetAudience: {required: true, label: 'Знаете ли вы свою ЦА'},
        sex: {required: true, label: 'Пол', placeholder: 'Например — 80% М'},
        age: {required: true, label: 'Возраст', placeholder: 'Например — 35-45 лет'},
        income: {required: true, label: 'Достаток', placeholder: 'Гипотетический доход пользователя, средняя месячная зарплата'},
        interests: {required: true, label: 'Интересы', placeholder: 'Чем интересуется целевая аудитория, например — спорт, туризм и т.д.'},
        useInteractionStages: {required: true, label: 'Этапы взаимодействия пользователя с продуктом', placeholder: 'Опишите путь пользователя от контакта до заказа'},
        communicationChannels: {required: false, label: 'Каналы коммуникации с ЦА', placeholder: 'Телефонный звонок, переписка в мессенджерах, почта, соц. сети и т.д.'},
        intensityOfUse: {required: true, label: 'Интенсивность употребления', placeholder: 'Как часто будет совершаться повторная покупка/заказ'},
    },
    materials: {
        materialsDevelopment: {required: true, label: 'Требуется ли разработка дополнительных материалов'},
        materialsToDevelop: {required: true, label: 'Перечислите материалы, которые нужно разработать', placeholder: 'Логотип, фирменный стиль, буклеты, иллюстрации'},
    },
    additionalInfo: {
        numberOfLanguageVersions: {required: true, label: 'Кол-во языковых версий'},
        budget: {required: true, label: 'Планируемый или рассчитанный бюджет', placeholder: 'Например: 100-200 т.р.'},
        technicalSpecificationAvailable: {required: true, label: 'Есть ли Техническое Задание'},
        technicalSpecification: {required: false, label: 'Прикрепите ТЗ'},
        siteAdministration: {required: true, label: 'Требуется ли администрирование сайта после запуска'},
        additionalInfo: {required: false, label: 'Дополнительная информация', placeholder: 'Дополнительная информация по проекту'},
        additionalFiles: {required: false, label: 'Дополнительные файлы'}
    }
}

const contactInfo = z.object({
    name: defineSchema(allFields.contactInfo.name),
    position: defineSchema(allFields.contactInfo.position),
    tel: defineSchema(allFields.contactInfo.tel),
    email: defineSchema(allFields.contactInfo.email).email(),
    communicationWay: checkboxGroupOptional,
})
const about = z.object({
    companyName: defineSchema(allFields.about.companyName),
    semantics: defineSchema(allFields.about.semantics),
    field: defineSchema(allFields.about.field),
    productsAndServices: defineSchema(allFields.about.productsAndServices),
    productsAndServicesDescription: defineSchema(allFields.about.productsAndServicesDescription),
    priorityProductsAndServices: defineSchema(allFields.about.priorityProductsAndServices),
    offerUniqueness: defineSchema(allFields.about.offerUniqueness),
    disadvantages: defineSchema(allFields.about.disadvantages),
    geography: defineSchema(allFields.about.geography),
    shortCompanyInfo: defineSchema(allFields.about.shortCompanyInfo),
    site: defineSchema(allFields.about.site),
    socialNetworks: defineSchema(allFields.about.socialNetworks),
    competitors: defineSchema(allFields.about.competitors),
})
const details = z.object({
    siteType: radio,
    goals: defineSchema(allFields.details.goals),
    usersTargetAction: checkboxGroupRequired,
    competitorsSites: defineSchema(allFields.details.competitorsSites),
    advantagesCompetitorsSites: defineSchema(allFields.details.advantagesCompetitorsSites),
    disadvantagesCompetitorsSites: defineSchema(allFields.details.disadvantagesCompetitorsSites),
    sitesYouLike: defineSchema(allFields.details.sitesYouLike),
    sitesYouDislike: defineSchema(allFields.details.sitesYouDislike),
    preferredColors: defineSchema(allFields.details.preferredColors),
    unwantedColors: defineSchema(allFields.details.unwantedColors),
    siteFunctionality: checkboxGroupRequired,
    specificSystem: defineSchema(allFields.details.specificSystem),
    seo: radio,
    copywriting: radio,
})
const targetGroup = z.object({
    knowTargetAudience: radio,
    sex: defineSchema(allFields.targetGroup.sex),
    age: defineSchema(allFields.targetGroup.age),
    income: defineSchema(allFields.targetGroup.income),
    interests: defineSchema(allFields.targetGroup.interests),
    useInteractionStages: defineSchema(allFields.targetGroup.useInteractionStages),
    communicationChannels: defineSchema(allFields.targetGroup.communicationChannels),
    intensityOfUse: defineSchema(allFields.targetGroup.intensityOfUse),
})
const materials = z.object({
    materialsDevelopment: radio,
    materialsToDevelop: defineSchema(allFields.materials.materialsToDevelop),
})
const additionalInfo = z.object({
    numberOfLanguageVersions: radio,
    budget: defineSchema(allFields.additionalInfo.budget),
    technicalSpecificationAvailable: defineSchema(allFields.additionalInfo.technicalSpecificationAvailable),
    technicalSpecification: multipleFilesSchema.optional(),
    siteAdministration: defineSchema(allFields.additionalInfo.siteAdministration),
    additionalInfo: defineSchema(allFields.additionalInfo.additionalInfo),
    additionalFiles: multipleFilesSchema.optional()
})

export const briefSchema = z.object({
    contactInfo,
    about,
    details,
    targetGroup,
    materials,
    additionalInfo
})