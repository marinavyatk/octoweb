import s from './briefPage.module.scss'
import {Header} from '../../components/ui/complex/header/header.tsx';
import {FooterWithoutForm} from '../../components/ui/complex/footerWithoutForm/footerWithoutForm.tsx';
import {BriefNavbar} from '../../components/ui/primitive/briefNavbar/briefNavbar.tsx';
import {Input} from '../../components/ui/primitive/input/input.tsx';
import {InputAdditionalFile} from '../../components/ui/primitive/inputAdditionalFile/inputAdditionalFile.tsx';
import {ArrowButtonWithText} from '../../components/ui/primitive/ArrowButtonWithText/arrowButtonWithText.tsx';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormInputMultiline} from '../../components/ui/primitive/inputMultiline/FormInputMultiline.tsx';
import {FormRadioGroup} from '../../components/ui/primitive/radioGroup/formRadioGroup.tsx';
import {RadioCheckboxGroup} from '../../components/ui/primitive/radioCheckboxGroup/radioCheckboxGroup.tsx';
import ArrowPointerRight from '../../assets/arrow-brief-right.svg?react'
import ArrowPointerLeft from '../../assets/arrow-brief-left.svg?react'
import {allFields, briefSchema, SectionName} from '../../common/validation.ts';


// const formSchema = z.object({
//     //contactInfo
//     name: required,
//     position: optionalString,
//     tel: required,
//     email: required.email(),
//     communicationWay: checkboxGroupOptional,
//
//     //about
//     companyName: required,
//     semantics: optionalString,
//     field: required,
//     productsAndServices: required,
//     productsAndServicesDescription: required,
//     priorityProductsAndServices: required,
//     offerUniqueness: required,
//     disadvantages: required,
//     geography: required,
//     shortCompanyInfo: optionalString,
//     site: optionalString,
//     socialNetworks: optionalString,
//     competitors: required,
//
//     //details
//     siteType: radio,
//     goals: required,
//     usersTargetAction: checkboxGroupRequired,
//     competitorsSites: required,
//     advantagesCompetitorsSites: required,
//     disadvantagesCompetitorsSites: required,
//     sitesYouLike: optionalString,
//     sitesYouDislike: optionalString,
//     preferredColors: optionalString,
//     unwantedColors: optionalString,
//     siteFunctionality: checkboxGroupRequired,
//     specificSystem: optionalString,
//     seo: radio,
//     copywriting: radio,
//
//     //targetGroup
//     knowTargetAudience: radio,
//     sex: required,
//     age: required,
//     income: required,
//     interests: required,
//     useInteractionStages: required,
//     communicationChannels: optionalString,
//     intensityOfUse: required,
//
//     //materials
//     materialsDevelopment: radio,
//     materialsToDevelop: required,
//
//     //additionalInfo
//     numberOfLanguageVersions: radio,
//     budget: required,
//     technicalSpecificationAvailable: required,
//     technicalSpecification: fileSchema.optional(),
//     siteAdministration: required,
//     additionalInfo: optionalString,
//     additionalFiles: fileSchema.optional()
//
// })

type FormValues = z.infer<typeof briefSchema>

type CurrentField = {
    [key: string]: string | string[] | FileList
}
type CurrentFields = Record<SectionName, CurrentField>

export const BriefPage = () => {
    console.log('rerender BriefPage')

    const {register, control, handleSubmit, formState: {errors}, watch} = useForm<FormValues>({
        resolver: zodResolver(briefSchema),
        defaultValues: {
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
                additionalFiles: {} as FileList
            }
        },
        mode: 'onBlur'
    })

    console.log(errors)
    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    const currentValues: CurrentFields = watch();
    console.log(currentValues)

    const checkSectionDone = (sectionName: SectionName) => {
        const requiredFields = Object.keys(allFields[sectionName]).filter(fieldName => allFields[sectionName][fieldName].required)
        const isRequiredFieldsNonEmpty = requiredFields.every(fieldName => currentValues[sectionName][fieldName].length > 0)
        const isSectionHasErrors = sectionName in errors;
        return isRequiredFieldsNonEmpty && !isSectionHasErrors
    }

    const briefSections = [
        {text: 'Контактная информация', href: '#contactInfo', completed: checkSectionDone('contactInfo')},
        {text: 'О компании и продукте', href: '#about', completed: checkSectionDone('about')},
        {text: 'Детализация задачи', href: '#details', completed: checkSectionDone('details')},
        {text: 'Целевая аудитория', href: '#targetGroup', completed: checkSectionDone('targetGroup')},
        {text: 'Материалы', href: '#materials', completed: checkSectionDone('materials')},
        {text: 'Доп. информация', href: '#additionalInfo', completed: checkSectionDone('additionalInfo')},
    ]


    return <div className={s.briefPage}>
        <Header/>
        <div className={s.mainContainer}>
            <section className={s.startSection}>
                <h1>БРИФ студии <br/>
                    <span className={s.accent}>OCTOWEB</span>
                </h1>
                <ArrowPointerRight className={s.arrowRight}/>
                <div className={s.explanation}>
                    <p>Перед началом работы, пожалуйста, ответьте на наши вопросы. Ответы станут отправной точкой. Это
                        позволит собрать необходимую информацию и подготовить подробное коммерческое предложение.</p>
                    <p>Наша цель - сделать общение продуктивным, чтобы уже на начальном этапе понять, чем наша команда
                        будет полезна. В случае, если увидим, что не справимся с работой, то с удовольствием
                        порекомендуем подходящих партнеров, способных решить задачи проекта.</p>
                </div>
                <ArrowPointerLeft className={s.arrowLeft}/>
                <span className={s.time}>Примерное время заполнения — 15-30 мин.</span>
            </section>
            <div className={s.formWithNavigation}>
                    <BriefNavbar navItems={briefSections} className={s.navbar}/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section className={s.section} id={'contactInfo'}>
                        <h2>Контактная информация</h2>
                        <Input label={allFields.contactInfo.name.label}
                               required={allFields.contactInfo.name.required}
                               placeholder={allFields.contactInfo.name.placeholder}
                               {...register('contactInfo.name')}
                               errorMessage={errors.contactInfo?.name?.message}
                        />
                        <Input label={allFields.contactInfo.position.label}
                               required={allFields.contactInfo.position.required}
                               placeholder={allFields.contactInfo.position.placeholder}
                               {...register('contactInfo.position')}
                               errorMessage={errors.contactInfo?.position?.message}
                        />
                        <Input label={allFields.contactInfo.tel.label}
                               required={allFields.contactInfo.tel.required}
                               type={'tel'}
                               placeholder={allFields.contactInfo.tel.placeholder}
                               {...register('contactInfo.tel')}
                               errorMessage={errors.contactInfo?.tel?.message}
                        />
                        <Input label={allFields.contactInfo.email.label}
                               required={allFields.contactInfo.email.required}
                               type={'email'}
                               placeholder={allFields.contactInfo.email.placeholder}
                               {...register('contactInfo.email')}
                               errorMessage={errors.contactInfo?.email?.message}
                        />
                        <RadioCheckboxGroup mainLabel={allFields.contactInfo.communicationWay.label}
                                            required={allFields.contactInfo.communicationWay.required}
                                            checkboxItems={[
                                                {
                                                    label: 'Telegram',
                                                    value: 'telegram',
                                                    rest: {...register('contactInfo.communicationWay')}
                                                },
                                                {
                                                    label: 'Skype',
                                                    value: 'skype',
                                                    rest: {...register('contactInfo.communicationWay')}
                                                },
                                                {
                                                    label: 'WhatsApp',
                                                    value: 'whatsApp',
                                                    rest: {...register('contactInfo.communicationWay')}
                                                },
                                                {
                                                    label: 'Email',
                                                    value: 'email',
                                                    rest: {...register('contactInfo.communicationWay')}
                                                },
                                                {
                                                    label: 'Звонок',
                                                    value: 'call',
                                                    rest: {...register('contactInfo.communicationWay')}
                                                },
                                            ]}
                                            errorMessage={errors.contactInfo?.communicationWay?.message}
                        />
                    </section>

                    <section className={s.section} id={'about'}>
                        <h2>О компании и продукте</h2>
                        <Input label={allFields.about.companyName.label}
                               required={allFields.about.companyName.required}
                               placeholder={allFields.about.companyName.placeholder}
                               {...register('about.companyName')}
                               errorMessage={errors.about?.companyName?.message}
                        />
                        <FormInputMultiline label={allFields.about.semantics.label}
                                            required={allFields.about.semantics.required}
                                            name={'about.semantics'}
                                            control={control}
                                            placeholder={allFields.about.semantics.placeholder}
                        />
                        <Input label={allFields.about.field.label}
                               required={allFields.about.field.required}
                               placeholder={allFields.about.field.placeholder}
                               {...register('about.field')}
                               errorMessage={errors.about?.field?.message}
                        />
                        <FormInputMultiline label={allFields.about.productsAndServices.label}
                                            required={allFields.about.productsAndServices.required}
                                            name={'about.productsAndServices'}
                                            control={control}
                                            placeholder={allFields.about.productsAndServices.placeholder}
                        />
                        <FormInputMultiline label={allFields.about.productsAndServicesDescription.label}
                                            required={allFields.about.productsAndServicesDescription.required}
                                            name={'about.productsAndServicesDescription'}
                                            control={control}
                                            placeholder={allFields.about.productsAndServicesDescription.placeholder}
                        />
                        <Input label={allFields.about.priorityProductsAndServices.label}
                               required={allFields.about.priorityProductsAndServices.required}
                               placeholder={allFields.about.priorityProductsAndServices.placeholder}
                               {...register('about.priorityProductsAndServices')}
                               errorMessage={errors.about?.priorityProductsAndServices?.message}
                        />
                        <FormInputMultiline label={allFields.about.offerUniqueness.label}
                                            required={allFields.about.offerUniqueness.required}
                                            name={'about.offerUniqueness'}
                                            control={control}
                                            placeholder={allFields.about.offerUniqueness.placeholder}
                        />
                        <FormInputMultiline label={allFields.about.disadvantages.label}
                                            required={allFields.about.disadvantages.required}
                                            name={'about.disadvantages'}
                                            control={control}
                                            placeholder={allFields.about.disadvantages.placeholder}
                        />
                        <FormInputMultiline label={allFields.about.geography.label}
                                            required={allFields.about.geography.required}
                                            name={'about.geography'}
                                            control={control}
                                            placeholder={allFields.about.geography.placeholder}
                        />
                        <FormInputMultiline label={allFields.about.shortCompanyInfo.label}
                                            required={allFields.about.shortCompanyInfo.required}
                                            name={'about.shortCompanyInfo'}
                                            control={control}
                                            placeholder={allFields.about.shortCompanyInfo.placeholder}
                        />
                        <Input label={allFields.about.site.label}
                               required={allFields.about.site.required}
                               placeholder={allFields.about.site.placeholder}
                               {...register('about.site')}
                               errorMessage={errors.about?.site?.message}
                        />
                        <Input label={allFields.about.socialNetworks.label}
                               required={allFields.about.socialNetworks.required}
                               placeholder={allFields.about.socialNetworks.placeholder}
                               {...register('about.socialNetworks')}
                               errorMessage={errors.about?.socialNetworks?.message}
                        />
                        <Input label={allFields.about.competitors.label}
                               required={allFields.about.competitors.required}
                               placeholder={allFields.about.competitors.placeholder}
                               {...register('about.competitors')}
                               errorMessage={errors.about?.competitors?.message}
                        />
                    </section>

                    <section className={s.section} id={'details'}>
                        <h2>Детализация задачи</h2>
                        <FormRadioGroup mainLabel={allFields.details.siteType.label}
                                        required={allFields.details.siteType.required}
                                        name={'details.siteType'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Лендинг', value: 'landing'},
                                            {label: 'Сайт-визитка', value: 'siteCard'},
                                            {label: 'Интернет-магазин', value: 'onlineStore'},
                                            {label: 'Информационный сайт', value: 'informational'},
                                            {label: 'Корпоративный сайт', value: 'corporate'},
                                            {label: 'Лонгрид', value: 'longrid'},
                                            {label: 'Нужна консультация', value: 'NeedConsultation'},
                                        ]}
                        />
                        <FormInputMultiline label={allFields.details.goals.label}
                                            required={allFields.details.goals.required}
                                            name={'details.goals'}
                                            control={control}
                                            placeholder={allFields.details.goals.placeholder}
                        />
                        <RadioCheckboxGroup mainLabel={allFields.details.usersTargetAction.label}
                                            required={allFields.details.usersTargetAction.required}
                                            checkboxItems={[
                                                {
                                                    label: 'Купить',
                                                    value: 'buy',
                                                    rest: {...register('details.usersTargetAction')}
                                                },
                                                {
                                                    label: 'Зарегистрироваться',
                                                    value: 'register',
                                                    rest: {...register('details.usersTargetAction')}
                                                },
                                                {
                                                    label: 'Забронировать',
                                                    value: 'book',
                                                    rest: {...register('details.usersTargetAction')}
                                                },
                                                {
                                                    label: 'Заказать',
                                                    value: 'order',
                                                    rest: {...register('details.usersTargetAction')}
                                                },
                                                {
                                                    label: 'Подписаться',
                                                    value: 'subscribe',
                                                    rest: {...register('details.usersTargetAction')}
                                                },
                                                {
                                                    label: 'Оставить заявку',
                                                    value: 'submitApplication ',
                                                    rest: {...register('details.usersTargetAction')}
                                                },
                                                {
                                                    label: 'Позвонить',
                                                    value: 'call ',
                                                    rest: {...register('details.usersTargetAction')}
                                                },
                                                {
                                                    label: 'Другое',
                                                    value: 'other ',
                                                    rest: {...register('details.usersTargetAction')}
                                                },
                                            ]}
                                            errorMessage={errors.details?.usersTargetAction?.message}
                        />
                        <Input label={allFields.details.competitorsSites.label}
                               required={allFields.details.competitorsSites.required}
                               placeholder={allFields.details.competitorsSites.placeholder}
                               {...register('details.competitorsSites')}
                               errorMessage={errors.details?.competitorsSites?.message}
                        />
                        <FormInputMultiline label={allFields.details.advantagesCompetitorsSites.label}
                                            required={allFields.details.advantagesCompetitorsSites.required}
                                            name={'details.advantagesCompetitorsSites'}
                                            control={control}
                                            placeholder={allFields.details.advantagesCompetitorsSites.placeholder}
                        />
                        <FormInputMultiline label={allFields.details.disadvantagesCompetitorsSites.label}
                                            required={allFields.details.disadvantagesCompetitorsSites.required}
                                            name={'details.disadvantagesCompetitorsSites'}
                                            control={control}
                                            placeholder={allFields.details.disadvantagesCompetitorsSites.placeholder}
                        />
                        <Input label={allFields.details.sitesYouLike.label}
                               required={allFields.details.sitesYouLike.required}
                               placeholder={allFields.details.sitesYouLike.placeholder}
                               {...register('details.sitesYouLike')}
                               errorMessage={errors.details?.sitesYouLike?.message}
                        />
                        <Input label={allFields.details.sitesYouDislike.label}
                               required={allFields.details.sitesYouDislike.required}
                               placeholder={allFields.details.sitesYouDislike.placeholder}
                               {...register('details.sitesYouDislike')}
                               errorMessage={errors.details?.sitesYouDislike?.message}
                        />
                        <FormInputMultiline label={allFields.details.preferredColors.label}
                                            required={allFields.details.preferredColors.required}
                                            name={'details.preferredColors'}
                                            control={control}
                                            placeholder={allFields.details.preferredColors.placeholder}
                        />
                        <FormInputMultiline label={allFields.details.unwantedColors.label}
                                            required={allFields.details.unwantedColors.required}
                                            name={'details.unwantedColors'}
                                            control={control}
                                            placeholder={allFields.details.unwantedColors.placeholder}
                        />
                        <RadioCheckboxGroup mainLabel={allFields.details.siteFunctionality.label}
                                            required={allFields.details.siteFunctionality.required}
                                            checkboxItems={[
                                                {label: 'CRM', value: 'crm', rest: {...register('details.siteFunctionality')}},
                                                {
                                                    label: 'Корзина и оплата',
                                                    value: 'shoppingCartAndPayment',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Формы сбора контактов',
                                                    value: 'contactCollectionForms',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Калькулятор',
                                                    value: 'calculator',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Настройка рассылки',
                                                    value: 'mailingSetup',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Интеграция Getcourse',
                                                    value: 'getcourseIntegration',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Личный кабинет',
                                                    value: 'personalAccount',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Получение заявок на почту',
                                                    value: 'receivingApplicationsByMail',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Получение заявок в телеграм',
                                                    value: 'receivingApplicationsByTelegram',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Каталог',
                                                    value: 'catalog',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Сохранение информации в Google документы',
                                                    value: 'savingInfoToGoogleDocs',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Нужна консультация',
                                                    value: 'needConsultation',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                                {
                                                    label: 'Другие',
                                                    value: 'other',
                                                    rest: {...register('details.siteFunctionality')}
                                                },
                                            ]}
                                            errorMessage={errors.details?.siteFunctionality?.message}
                        />
                        <Input label={allFields.details.specificSystem.label}
                               required={allFields.details.specificSystem.required}
                               placeholder={allFields.details.specificSystem.placeholder}
                               {...register('details.specificSystem')}
                               errorMessage={errors.details?.specificSystem?.message}
                        />
                        <FormRadioGroup mainLabel={allFields.details.seo.label}
                                        required={allFields.details.seo.required}
                                        name={'details.seo'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да, нужна', value: 'yes'},
                                            {label: 'Нет, не нужна', value: 'no'},
                                            {label: 'Свой специалист', value: 'ownSpecialist'},
                                            {label: 'Нужна консультация', value: 'needConsultation'},
                                        ]}
                        />
                        <FormRadioGroup mainLabel={allFields.details.copywriting.label}
                                        required={allFields.details.copywriting.required}
                                        name={'details.copywriting'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да, нужен', value: 'yes'},
                                            {label: 'Нет, не нужен', value: 'no'},
                                            {label: 'Свой специалист', value: 'ownSpecialist'},
                                            {label: 'Нужна консультация', value: 'needConsultation'},
                                        ]}
                        />
                    </section>

                    <section className={s.section} id={'targetGroup'}>
                        <h2>Целевая аудитория</h2>
                        <FormRadioGroup mainLabel={allFields.targetGroup.knowTargetAudience.label}
                                        required={allFields.targetGroup.knowTargetAudience.required}
                                        name={'targetGroup.knowTargetAudience'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                            {label: 'Нужна проработка', value: 'needToElaboration'},
                                        ]}
                        />
                        <div className={s.twoColumns}>
                            <Input label={allFields.targetGroup.sex.label}
                                   required={allFields.targetGroup.sex.required}
                                   placeholder={allFields.targetGroup.sex.placeholder}
                                   {...register('targetGroup.sex')}
                                   errorMessage={errors.targetGroup?.sex?.message}
                            />
                            <Input label={allFields.targetGroup.age.label}
                                   required={allFields.targetGroup.age.required}
                                   placeholder={allFields.targetGroup.age.placeholder}
                                   {...register('targetGroup.age')}
                                   errorMessage={errors.targetGroup?.age?.message}
                            />
                        </div>
                        <FormInputMultiline label={allFields.targetGroup.income.label}
                                            required={allFields.targetGroup.income.required}
                                            name={'targetGroup.income'}
                                            control={control}
                                            placeholder={allFields.targetGroup.income.placeholder}
                        />
                        <FormInputMultiline label={allFields.targetGroup.interests.label}
                                            required={allFields.targetGroup.interests.required}
                                            name={'targetGroup.interests'}
                                            control={control}
                                            placeholder={allFields.targetGroup.interests.placeholder}
                        />
                        <FormInputMultiline label={allFields.targetGroup.useInteractionStages.label}
                                            required={allFields.targetGroup.useInteractionStages.required}
                                            name={'targetGroup.useInteractionStages'}
                                            control={control}
                                            placeholder={allFields.targetGroup.useInteractionStages.placeholder}
                        />
                        <FormInputMultiline label={allFields.targetGroup.communicationChannels.label}
                                            required={allFields.targetGroup.communicationChannels.required}
                                            name={'targetGroup.communicationChannels'}
                                            control={control}
                                            placeholder={allFields.targetGroup.communicationChannels.placeholder}
                        />
                        <FormInputMultiline label={allFields.targetGroup.intensityOfUse.label}
                                            required={allFields.targetGroup.intensityOfUse.required}
                                            name={'targetGroup.intensityOfUse'}
                                            control={control}
                                            placeholder={allFields.targetGroup.intensityOfUse.placeholder}
                        />
                    </section>

                    <section className={s.section} id={'materials'}>
                        <h2>Материалы</h2>
                        <FormRadioGroup mainLabel={allFields.materials.materialsDevelopment.label}
                                        required={allFields.materials.materialsDevelopment.required}
                                        name={'materials.materialsDevelopment'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                        ]}
                        />
                        {currentValues.materials?.materialsDevelopment === 'yes' &&
                        <Input label={allFields.materials.materialsToDevelop.label}
                               required={allFields.materials.materialsToDevelop.required}
                               placeholder={allFields.materials.materialsToDevelop.placeholder}
                               {...register('materials.materialsToDevelop')}
                               errorMessage={errors.materials?.materialsToDevelop?.message}
                        />
                        }
                    </section>

                    <section className={s.section} id={'additionalInfo'}>
                        <h2>Доп. информация</h2>
                        <FormRadioGroup mainLabel={allFields.additionalInfo.numberOfLanguageVersions.label}
                                        required={allFields.additionalInfo.numberOfLanguageVersions.required}
                                        name={'additionalInfo.numberOfLanguageVersions'}
                                        control={control}
                                        radioItems={[
                                            {label: '1', value: '1'},
                                            {label: '2', value: '2'},
                                            {label: 'Больше 2-ух', value: 'moreThan2'},
                                        ]}
                        />
                        <Input label={allFields.additionalInfo.budget.label}
                               required={allFields.additionalInfo.budget.required}
                               placeholder={allFields.additionalInfo.budget.placeholder}
                               {...register('additionalInfo.budget')}
                               errorMessage={errors.additionalInfo?.budget?.message}
                        />
                        <FormRadioGroup mainLabel={allFields.additionalInfo.technicalSpecificationAvailable.label}
                                        required={allFields.additionalInfo.technicalSpecificationAvailable.required}
                                        name={'additionalInfo.technicalSpecificationAvailable'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                        ]}
                        />

                        <InputAdditionalFile label={allFields.additionalInfo.technicalSpecification.label}
                                             {...register('additionalInfo.technicalSpecification')}
                        />
                        <FormRadioGroup mainLabel={allFields.additionalInfo.siteAdministration.label}
                                        required={allFields.additionalInfo.siteAdministration.required}
                                        name={'additionalInfo.siteAdministration'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                        ]}
                        />
                        <FormInputMultiline label={allFields.additionalInfo.additionalInfo.label}
                                            required={allFields.additionalInfo.additionalInfo.required}
                                            name={'additionalInfo.additionalInfo'}
                                            control={control}
                                            placeholder={allFields.additionalInfo.additionalInfo.placeholder}
                        />
                        <InputAdditionalFile label={allFields.additionalInfo.additionalFiles.label}
                                             {...register('additionalInfo.additionalFiles')}
                        />
                    </section>
                    <div className={s.submit}>
                        <p>Я принимаю условия <a href={'#'} rel={'nofollow'} download>Политика ООО OctoWeb в отношении
                            обработки
                            данных</a> и, нажимая на
                            кнопку
                            “Отправить”, даю согласие на обработку компанией указанных мной персональных данных</p>
                        <ArrowButtonWithText text={'Отправить'}
                                             type={'submit'}
                                             className={s.arrowButton}/>
                    </div>
                </form>
            </div>
        </div>
        <FooterWithoutForm/>
    </div>
}