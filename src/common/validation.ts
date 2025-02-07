import { z } from "zod";
import { AllFields, FieldType } from "@/common/briefHelpers";

//common
export const requiredString = z
  .string()
  .min(1, { message: "Это обязательное поле" })
  .max(500, "Максимум 500 символов");
export const optionalString = z.string().max(500, "Максимум 500 символов");
export const checkboxGroupRequired = z
  .string()
  .array()
  .nonempty({ message: "Выберите хотя бы один вариант" });
export const checkboxGroupOptional = z.string().array().optional();
export const radio = z.string().min(1, { message: "Это обязательное поле" });

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB

export const defineSchema = (fieldName: FieldType) => {
  return fieldName.required ? requiredString : optionalString;
};

export const fileSchema = z.custom<FileList>().refine((fileList) => {
  if (fileList[0] === undefined) return true;
  return fileList[0] && fileList[0]?.size <= MAX_UPLOAD_SIZE;
}, "Размер файла не более 5mb");
export const multipleFilesSchema = z.custom<FileList>().optional();

//for form
export const formSchema = z.object({
  name: requiredString,
  email: requiredString.email({ message: "Некорректный email" }),
  tel: requiredString.refine((value) => {
    const phoneDigits = value.replace(/\D/g, '');
    return phoneDigits.length === 11;
  }, { message: "Номер телефона должен содержать 11 цифр" }),
  projectDescription: requiredString,
  projectDescriptionFile: fileSchema,
  mailing: z.boolean()
});


//for brief
const getContactInfo = (allFields: AllFields) => (z.object({
  name: defineSchema(allFields.contactInfo.name),
  position: defineSchema(allFields.contactInfo.position),
  tel: defineSchema(allFields.contactInfo.tel),
  email: defineSchema(allFields.contactInfo.email).email(),
  communicationWay: checkboxGroupOptional
}));

const getAbout = (allFields: AllFields) => (z.object({
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
  competitors: defineSchema(allFields.about.competitors)
}));

const getDetails = (allFields: AllFields) => (z.object({
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
  copywriting: radio
}));

const getTargetGroup = (allFields: AllFields) => (z.object({
  knowTargetAudience: radio,
  sex: defineSchema(allFields.targetGroup.sex),
  age: defineSchema(allFields.targetGroup.age),
  income: defineSchema(allFields.targetGroup.income),
  interests: defineSchema(allFields.targetGroup.interests),
  useInteractionStages: defineSchema(allFields.targetGroup.useInteractionStages),
  communicationChannels: defineSchema(allFields.targetGroup.communicationChannels),
  intensityOfUse: defineSchema(allFields.targetGroup.intensityOfUse)
}));

const getMaterials = (allFields: AllFields) => (z.object({
  materialsDevelopment: radio,
  materialsToDevelop: defineSchema(allFields.materials.materialsToDevelop)
}));

export const getAdditionalInfo = (allFields: AllFields) => (z.object({
  numberOfLanguageVersions: radio,
  budget: defineSchema(allFields.additionalInfo.budget),
  technicalSpecificationAvailable: defineSchema(
    allFields.additionalInfo.technicalSpecificationAvailable
  ),
  technicalSpecification: multipleFilesSchema.optional(),
  siteAdministration: defineSchema(allFields.additionalInfo.siteAdministration),
  additionalInfo: defineSchema(allFields.additionalInfo.additionalInfo),
  additionalFiles: multipleFilesSchema.optional()
}));

export const getBriefSchema = (allFields: AllFields) => (z.object({
  contactInfo: getContactInfo(allFields),
  about: getAbout(allFields),
  details: getDetails(allFields),
  targetGroup: getTargetGroup(allFields),
  materials: getMaterials(allFields),
  additionalInfo: getAdditionalInfo(allFields)
}));