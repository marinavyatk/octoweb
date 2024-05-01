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


const fileSchema = z.custom<FileList>()
const required = z.string().min(1, {message: 'Это обязательное поле'}).max(500, {message: 'Длина не более 500 символов'})
const radio = z.string() //temp
const optionalString = z.string().max(500, {message: 'Длина не более 500 символов'}).optional()
const checkboxGroupRequired = z.string().array().nonempty({message: 'Выберите хотя бы один вариант'})
const checkboxGroupOptional = z.string().array().optional()


const formSchema = z.object({
    //contactInfo
    name: required,
    position: optionalString,
    tel: required,
    email: required.email(),
    communicationWay: checkboxGroupOptional,

    //about
    companyName: required,
    semantics: optionalString,
    field: required,
    productsAndServices: required,
    productsAndServicesDescription: required,
    priorityProductsAndServices: required,
    offerUniqueness: required,
    disadvantages: required,
    geography: required,
    shortCompanyInfo: optionalString,
    site: optionalString,
    socialNetworks: optionalString,
    competitors: required,

    //details
    siteType: radio,
    goals: required,
    usersTargetAction: checkboxGroupRequired,
    competitorsSites: required,
    advantagesCompetitorsSites: required,
    disadvantagesCompetitorsSites: required,
    sitesYouLike: optionalString,
    sitesYouDislike: optionalString,
    preferredColors: optionalString,
    unwantedColors: optionalString,
    siteFunctionality: checkboxGroupRequired,
    specificSystem: optionalString,
    seo: radio,
    copywriting: radio,

    //targetGroup
    knowTargetAudience: radio,
    sex: required,
    age: required,
    income: required,
    interests: required,
    useInteractionStages: required,
    communicationChannels: optionalString,
    intensityOfUse: required,

    //materials
    materialsDevelopment: radio,
    materialsToDevelop: required,

    //additionalInfo
    numberOfLanguageVersions: radio,
    budget: required,
    technicalSpecificationAvailable: required,
    technicalSpecification: fileSchema.optional(),
    siteAdministration: required,
    additionalInfo: optionalString,
    additionalFiles: fileSchema.optional()

})

type FormValues = z.infer<typeof formSchema>


export const BriefPage = () => {
    const briefSections = [
        {text: 'Контактная информация', href: '#contactInfo', completed: true},
        {text: 'О компании и продукте', href: '#about', completed: true},
        {text: 'Детализация задачи', href: '#details', completed: false},
        {text: 'Целевая аудитория', href: '#targetGroup', completed: false},
        {text: 'Материалы', href: '#materials', completed: false},
        {text: 'Доп. информация', href: '#additionalInfo', completed: false},
    ]

    console.log(location.hash)

    const {register, control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            //contactInfo
            name: '',
            position: '',
            tel: '',
            email: '',
            communicationWay: [],

            //about
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

            //details
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

            //targetGroup
            knowTargetAudience: 'yes',
            sex: '',
            age: '',
            income: '',
            interests: '',
            useInteractionStages: '',
            communicationChannels: '',
            intensityOfUse: '',

            //materials
            materialsDevelopment: 'yes',
            materialsToDevelop: '',

            //additionalInfo
            numberOfLanguageVersions: '1',
            budget: '',
            technicalSpecificationAvailable: 'yes',
            technicalSpecification: {} as FileList,
            siteAdministration: 'yes',
            additionalInfo: '',
            additionalFiles: {} as FileList
        },
        mode: 'onBlur'
    })
    console.log(errors)
    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className={s.section} id={'contactInfo'}>
                    <div>
                        <BriefNavbar navItems={briefSections}/>
                    </div>
                    <div className={s.fields}>
                        <h2>Контактная информация</h2>
                        <Input label={'Как к Вам обращаться?'}
                               required
                               {...register('name')}
                               errorMessage={errors.name?.message}
                        />
                        <Input label={'Должность'}
                               required={false}
                               {...register('position')}
                               errorMessage={errors.position?.message}
                        />
                        <Input label={'Номер телефона'}
                               required
                               type={'tel'}
                               {...register('tel')}
                               errorMessage={errors.tel?.message}
                        />
                        <Input label={'email'}
                               required
                               type={'email'}
                               {...register('email')}
                               errorMessage={errors.email?.message}
                        />
                        <RadioCheckboxGroup mainLabel={'Предпочитаемый способ связи'}
                                            required={false}
                                            checkboxItems={[
                                                {
                                                    label: 'Telegram',
                                                    value: 'telegram',
                                                    rest: {...register('communicationWay')}
                                                },
                                                {
                                                    label: 'Skype',
                                                    value: 'skype',
                                                    rest: {...register('communicationWay')}
                                                },
                                                {
                                                    label: 'WhatsApp',
                                                    value: 'whatsApp',
                                                    rest: {...register('communicationWay')}
                                                },
                                                {
                                                    label: 'Email',
                                                    value: 'email',
                                                    rest: {...register('communicationWay')}
                                                },
                                                {
                                                    label: 'Звонок',
                                                    value: 'call',
                                                    rest: {...register('communicationWay')}
                                                },
                                            ]}
                                            errorMessage={errors.communicationWay?.message}
                        />
                    </div>
                </section>

                <section className={s.section} id={'about'}>
                    <div>
                        <BriefNavbar navItems={briefSections}/>
                    </div>
                    <div className={s.fields}>
                        <h2>О компании и продукте</h2>
                        <Input label={'Название компании'}
                               required
                               {...register('companyName')}
                               errorMessage={errors.companyName?.message}
                        />
                        <FormInputMultiline label={'Семантика названия'}
                                            required={false}
                                            name={'semantics'}
                                            control={control}
                                            placeholder={'Семантическое значение названия компании, которое поможет лучше понять суть бренда и подчеркнуть сильные стороны'}
                        />
                        <Input label={'Ниша'}
                               required
                               {...register('field')}
                               errorMessage={errors.field?.message}
                        />
                        <FormInputMultiline label={'Ряд продуктов и услуг'}
                                            required
                                            name={'productsAndServices'}
                                            control={control}
                        />
                        <FormInputMultiline label={'Описание продукта или услуги'}
                                            required
                                            name={'productsAndServicesDescription'}
                                            control={control}
                                            placeholder={'Подробное описание основных услуг, указанных в предыдущем пункте'}
                        />
                        <Input label={'Приоритетные товары и услуги'}
                               required
                               {...register('priorityProductsAndServices')}
                               errorMessage={errors.priorityProductsAndServices?.message}
                        />
                        <FormInputMultiline label={'Уникальность предложения'}
                                            required
                                            name={'offerUniqueness'}
                                            control={control}
                                            placeholder={'Краткое описание фишки и уникальности бренда'}
                        />
                        <FormInputMultiline label={'Недостатки услуги или продукта'}
                                            required
                                            name={'disadvantages'}
                                            control={control}
                        />
                        <FormInputMultiline label={'География продукта/услуги'}
                                            required
                                            name={'geography'}
                                            control={control}
                                            placeholder={'В каких регионах/ городах / странах представлены услуги или продукт'}
                        />
                        <FormInputMultiline label={'Краткая информация о компании'}
                                            required={false}
                                            name={'shortCompanyInfo'}
                                            control={control}
                        />
                        <Input label={'Сайт компании (если есть)'}
                               required={false}
                               placeholder={'Введите сайт компании, если он существует'}
                               {...register('site')}
                               errorMessage={errors.site?.message}
                        />
                        <Input label={'Социальные сети'}
                               required={false}
                               placeholder={'Прикрепите ссылки на социальные сети, если они есть'}
                               {...register('socialNetworks')}
                               errorMessage={errors.socialNetworks?.message}
                        />
                        <Input label={'Прямые конкуренты'}
                               required
                               {...register('competitors')}
                               errorMessage={errors.competitors?.message}
                        />
                    </div>
                </section>

                <section className={s.section} id={'details'}>
                    <div>
                        <BriefNavbar navItems={briefSections}/>
                    </div>
                    <div className={s.fields}>
                        <h2>Детализация задачи</h2>
                        <FormRadioGroup mainLabel={'Тип сайта'}
                                        required
                                        name={'siteType'}
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
                        <FormInputMultiline label={'Цели, которые должен решить сайт'}
                                            required
                                            name={'goals'}
                                            control={control}
                                            placeholder={'Например: увеличить конверсию, рассказать о бизнесе, привлечь и т.д.'}
                        />
                        <RadioCheckboxGroup mainLabel={'Целевое действие пользователя'}
                                            required
                                            checkboxItems={[
                                                {
                                                    label: 'Купить',
                                                    value: 'buy',
                                                    rest: {...register('usersTargetAction')}
                                                },
                                                {
                                                    label: 'Зарегистрироваться',
                                                    value: 'register',
                                                    rest: {...register('usersTargetAction')}
                                                },
                                                {
                                                    label: 'Забронировать',
                                                    value: 'book',
                                                    rest: {...register('usersTargetAction')}
                                                },
                                                {
                                                    label: 'Заказать',
                                                    value: 'order',
                                                    rest: {...register('usersTargetAction')}
                                                },
                                                {
                                                    label: 'Подписаться',
                                                    value: 'subscribe',
                                                    rest: {...register('usersTargetAction')}
                                                },
                                                {
                                                    label: 'Оставить заявку',
                                                    value: 'submitApplication ',
                                                    rest: {...register('usersTargetAction')}
                                                },
                                                {
                                                    label: 'Позвонить',
                                                    value: 'call ',
                                                    rest: {...register('usersTargetAction')}
                                                },
                                                {
                                                    label: 'Другое',
                                                    value: 'other ',
                                                    rest: {...register('usersTargetAction')}
                                                },
                                            ]}
                                            errorMessage={errors.usersTargetAction?.message}
                        />
                        <Input label={'Сайты конкурентов'}
                               required
                               placeholder={'Укажите сайты прямых или смежных конкурентов, минимум 3'}
                               {...register('competitorsSites')}
                               errorMessage={errors.competitorsSites?.message}
                        />
                        <FormInputMultiline label={'Чем нравятся сайты конкурентов'}
                                            required
                                            name={'advantagesCompetitorsSites'}
                                            control={control}
                                            placeholder={'Укажите сильные стороны сайтов конкурентов'}
                        />
                        <FormInputMultiline label={`Чем не нравятся сайты конкурентов`}
                                            required
                                            name={'disadvantagesCompetitorsSites'}
                                            control={control}
                                            placeholder={'Укажите, что не нравится на сайтах конкурентов'}
                        />
                        <Input label={'Сайты, которые нравятся'}
                               required={false}
                               placeholder={'Сайты не конкурентов, которые вам нравятся, и почему'}
                               {...register('sitesYouLike')}
                               errorMessage={errors.sitesYouLike?.message}
                        />
                        <Input label={'Сайты, которые не нравятся'}
                               required={false}
                               placeholder={'Сайты не конкурентов, которые вам не нравятся, и почему'}
                               {...register('sitesYouDislike')}
                               errorMessage={errors.sitesYouDislike?.message}
                        />
                        <FormInputMultiline label={`Предпочитаемые цвета`}
                                            required={false}
                                            name={'preferredColors'}
                                            control={control}
                                            placeholder={'Укажите предпочтения в цвете, если они есть'}
                        />
                        <FormInputMultiline label={`Нежелательные цвета`}
                                            required={false}
                                            name={'unwantedColors'}
                                            control={control}
                                            placeholder={'Укажите цвета, которые не подходит вашему продукту'}
                        />
                        <RadioCheckboxGroup mainLabel={'Планируемый функционал сайта'}
                                            required
                                            checkboxItems={[
                                                {label: 'CRM', value: 'crm', rest: {...register('siteFunctionality')}},
                                                {
                                                    label: 'Корзина и оплата',
                                                    value: 'shoppingCartAndPayment',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Формы сбора контактов',
                                                    value: 'contactCollectionForms',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Калькулятор',
                                                    value: 'calculator',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Настройка рассылки',
                                                    value: 'mailingSetup',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Интеграция Getcourse',
                                                    value: 'getcourseIntegration',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Личный кабинет',
                                                    value: 'personalAccount',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Получение заявок на почту',
                                                    value: 'receivingApplicationsByMail',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Получение заявок в телеграм',
                                                    value: 'receivingApplicationsByTelegram',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Каталог',
                                                    value: 'catalog',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Сохранение информации в Google документы',
                                                    value: 'savingInfoToGoogleDocs',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Нужна консультация',
                                                    value: 'needConsultation',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                                {
                                                    label: 'Другие',
                                                    value: 'other',
                                                    rest: {...register('siteFunctionality')}
                                                },
                                            ]}
                                            errorMessage={errors.siteFunctionality?.message}
                        />
                        <Input label={'Есть ли определенная CMS система, на которой нужно сделать сайт?'}
                               required={false}
                               placeholder={'Например Tilda, WordPress и др.'}
                               {...register('specificSystem')}
                               errorMessage={errors.specificSystem?.message}
                        />
                        <FormRadioGroup mainLabel={'SEO-Оптимизация'}
                                        required
                                        name={'seo'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да, нужна', value: 'yes'},
                                            {label: 'Нет, не нужна', value: 'no'},
                                            {label: 'Свой специалист', value: 'ownSpecialist'},
                                            {label: 'Нужна консультация', value: 'needConsultation'},
                                        ]}
                        />
                        <FormRadioGroup mainLabel={'Копирайтинг'}
                                        required
                                        name={'copywriting'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да, нужен', value: 'yes'},
                                            {label: 'Нет, не нужен', value: 'no'},
                                            {label: 'Свой специалист', value: 'ownSpecialist'},
                                            {label: 'Нужна консультация', value: 'needConsultation'},
                                        ]}
                        />
                    </div>
                </section>

                <section className={s.section} id={'targetGroup'}>
                    <div>
                        <BriefNavbar navItems={briefSections}/>
                    </div>
                    <div className={s.fields}>
                        <h2>Целевая аудитория</h2>
                        <FormRadioGroup mainLabel={'Знаете ли вы свою ЦА'}
                                        required={true}
                                        name={'knowTargetAudience'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                            {label: 'Нужна проработка', value: 'needToElaboration'},
                                        ]}
                        />
                        <div className={s.twoColumns}>
                            <Input label={'Пол'}
                                   required
                                   placeholder={'Например — 80% М'}
                                   {...register('sex')}
                                   errorMessage={errors.sex?.message}
                            />
                            <Input label={'Возраст'}
                                   required
                                   placeholder={'Например — 35-45 лет'}
                                   {...register('age')}
                                   errorMessage={errors.age?.message}
                            />
                        </div>
                        <FormInputMultiline label={`Достаток`}
                                            required
                                            name={'income'}
                                            control={control}
                                            placeholder={'Гипотетический доход пользователя, средняя месячная зарплата'}
                        />
                        <FormInputMultiline label={`Интересы`}
                                            required
                                            name={'interests'}
                                            control={control}
                                            placeholder={'Чем интересуется целевая аудитория, например — спорт, туризм и т.д.'}
                        />
                        <FormInputMultiline label={`Этапы взаимодействия пользователя с продуктом`}
                                            required
                                            name={'useInteractionStages'}
                                            control={control}
                                            placeholder={'Опишите путь пользователя от контакта до заказа'}
                        />
                        <FormInputMultiline label={`Каналы коммуникации с ЦА`}
                                            required={false}
                                            name={'communicationChannels'}
                                            control={control}
                                            placeholder={'Телефонный звонок, переписка в мессенджерах, почта, соц. сети и т.д.'}
                        />
                        <FormInputMultiline label={`Интенсивность употребления`}
                                            required
                                            name={'intensityOfUse'}
                                            control={control}
                                            placeholder={'Как часто будет совершаться повторная покупка/заказ'}
                        />
                    </div>
                </section>

                <section className={s.section} id={'materials'}>
                    <div>
                        <BriefNavbar navItems={briefSections}/>
                    </div>
                    <div className={s.fields}>
                        <h2>Материалы</h2>
                        <FormRadioGroup mainLabel={'Требуется ли разработка дополнительных материалов'}
                                        required
                                        name={'materialsDevelopment'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                        ]}
                        />
                        <Input label={'Перечислите материалы, которые нужно разработать'}
                               required
                               placeholder={'Логотип, фирменный стиль, буклеты, иллюстрации'}
                               {...register('materialsToDevelop')}
                               errorMessage={errors.materialsToDevelop?.message}
                        />
                    </div>
                </section>

                <section className={s.section} id={'additionalInfo'}>
                    <div>
                        <BriefNavbar navItems={briefSections}/>
                    </div>
                    <div className={s.fields}>
                        <h2>Доп. информация</h2>
                        <FormRadioGroup mainLabel={'Кол-во языковых версий'}
                                        required
                                        name={'numberOfLanguageVersions'}
                                        control={control}
                                        radioItems={[
                                            {label: '1', value: '1'},
                                            {label: '2', value: '2'},
                                            {label: 'Больше 2-ух', value: 'moreThan2'},
                                        ]}
                        />
                        <Input label={'Планируемый или рассчитанный бюджет'}
                               required
                               placeholder={'Например: 100-200 т.р.'}
                               {...register('budget')}
                               errorMessage={errors.budget?.message}
                        />
                        <FormRadioGroup mainLabel={'Есть ли Техническое Задание'}
                                        required
                                        name={'technicalSpecificationAvailable'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                        ]}
                        />

                        <InputAdditionalFile label={'Прикрепите ТЗ'}
                                             {...register('technicalSpecification')}
                        />
                        <FormRadioGroup mainLabel={'Требуется ли администрирование сайта после запуска'}
                                        required={true}
                                        name={'siteAdministration'}
                                        control={control}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                        ]}
                        />
                        <FormInputMultiline label={`Дополнительная информация`}
                                            required={false}
                                            name={'additionalInfo'}
                                            control={control}
                                            placeholder={'Дополнительная информация по проекту'}
                        />
                        <InputAdditionalFile label={'Дополнительные файлы'}
                                             {...register('additionalFiles')}
                        />
                    </div>
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
        <FooterWithoutForm/>
    </div>
}