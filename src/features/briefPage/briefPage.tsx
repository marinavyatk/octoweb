import s from './briefPage.module.scss'
import {Header} from '../../components/ui/complex/header/header.tsx';
import {FooterWithoutForm} from '../../components/ui/complex/footerWithoutForm/footerWithoutForm.tsx';
import {BriefNavbar} from '../../components/ui/primitive/briefNavbar/briefNavbar.tsx';
import {Input} from '../../components/ui/primitive/input/input.tsx';
import {RadioCheckbox} from '../../components/ui/primitive/radioCheckbox/radioCheckbox.tsx';
import {InputAdditionalFile} from '../../components/ui/primitive/inputAdditionalFile/inputAdditionalFile.tsx';
import {ArrowButtonWithText} from '../../components/ui/primitive/ArrowButtonWithText/arrowButtonWithText.tsx';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormInputMultiline} from '../../components/ui/primitive/inputMultiline/FormInputMultiline.tsx';
import {FormRadioGroup} from '../../components/ui/primitive/radioGroup/formRadioGroup.tsx';


const fileSchema = z.custom<FileList>()
const required = z.string().min(1, {message: 'Это обязательное поле'}).max(500, {message: 'Длина не более 500 символов'})
const radio = z.string() //temp
const optionalString = z.string().max(500, {message: 'Длина не более 500 символов'}).optional()


const formSchema = z.object({
    //contactInfo
    name: required,
    position: optionalString,
    tel: required,
    email: required.email(),
    communicationWay: radio,

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
    usersTargetAction: radio,
    competitorsSites: required,
    advantagesCompetitorsSites: required,
    disadvantagesCompetitorsSites: required,
    sitesYouLike: optionalString,
    sitesYouDislike: optionalString,
    preferredColors: optionalString,
    unwantedColors: optionalString,
    siteFunctionality: radio,
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
            communicationWay: '',

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
            usersTargetAction: '',
            competitorsSites: '',
            advantagesCompetitorsSites: '',
            disadvantagesCompetitorsSites: '',
            sitesYouLike: '',
            sitesYouDislike: '',
            preferredColors: '',
            unwantedColors: '',
            siteFunctionality: '',
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
                <div className={s.explanation}>
                    <p>Перед началом работы, пожалуйста, ответьте на наши вопросы. Ответы станут отправной точкой. Это
                        позволит собрать необходимую информацию и подготовить подробное коммерческое предложение.</p>
                    <p>Наша цель - сделать общение продуктивным, чтобы уже на начальном этапе понять, чем наша команда
                        будет полезна. В случае, если увидим, что не справимся с работой, то с удовольствием
                        порекомендуем подходящих партнеров, способных решить задачи проекта.</p>
                </div>
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

                        <div>
                            <span className={s.label}>Предпочитаемый способ связи</span>
                            <div className={s.radioButtons}>
                                <RadioCheckbox text={'Telegram'}/>
                                <RadioCheckbox text={'Skype'}/>
                                <RadioCheckbox text={'WhatsApp'}/>
                                <RadioCheckbox text={'Email'}/>
                                <RadioCheckbox text={'Звонок'}/>
                            </div>
                        </div>
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
                                            placeholder={'Семантическое значение названия компании, которое поможет лучше понять суть бренда и подчеркнуть сильные стороны'}
                                            name={'semantics'}
                                            control={control}
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
                        <FormRadioGroup control={control}
                                        name={'siteType'}
                                        mainLabel={'Тип сайта'} required={true}
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
                                            placeholder={'Например: увеличить конверсию, рассказать о бизнесе, привлечь и т.д.'}
                                            name={'goals'}
                                            control={control}
                        />
                        <div>
                            <span className={s.label}>
                                Целевое действие пользователя
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioCheckbox text={'Купить'}/>
                                <RadioCheckbox text={'Зарегистрироваться'}/>
                                <RadioCheckbox text={'Забронировать'}/>
                                <RadioCheckbox text={'Заказать'}/>
                                <RadioCheckbox text={'Подписаться'}/>
                                <RadioCheckbox text={'Оставить заявку'}/>
                                <RadioCheckbox text={'Позвонить'}/>
                                <RadioCheckbox text={'Другое'}/>
                            </div>
                        </div>
                        <Input label={'Сайты конкурентов'}
                               required
                               placeholder={'Укажите сайты прямых или смежных конкурентов, минимум 3'}
                               {...register('competitorsSites')}
                               errorMessage={errors.competitorsSites?.message}
                        />
                        <FormInputMultiline label={'Чем нравятся сайты конкурентов'}
                                            required
                                            placeholder={'Укажите сильные стороны сайтов конкурентов'}
                                            name={'advantagesCompetitorsSites'}
                                            control={control}
                        />
                        <FormInputMultiline label={`Чем не нравятся сайты конкурентов`}
                                            required
                                            placeholder={'Укажите, что не нравится на сайтах конкурентов'}
                                            name={'disadvantagesCompetitorsSites'}
                                            control={control}
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
                                            placeholder={'Укажите предпочтения в цвете, если они есть'}
                                            name={'preferredColors'}
                                            control={control}
                        />
                        <FormInputMultiline label={`Нежелательные цвета`}
                                            required={false}
                                            placeholder={'Укажите цвета, которые не подходит вашему продукту'}
                                            name={'unwantedColors'}
                                            control={control}
                        />
                        <div>
                            <span className={s.label}>
                                Планируемый функционал сайта
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioCheckbox text={'CRM'}/>
                                <RadioCheckbox text={'Корзина и оплата'}/>
                                <RadioCheckbox text={'Формы сбора контактов'}/>
                                <RadioCheckbox text={'Калькулятор'}/>
                                <RadioCheckbox text={'Настройка рассылки'}/>
                                <RadioCheckbox text={'Интеграция Getcourse'}/>
                                <RadioCheckbox text={'Личный кабинет'}/>
                                <RadioCheckbox text={'Получение заявок на почту'}/>
                                <RadioCheckbox text={'Получение заявок в телеграм'}/>
                                <RadioCheckbox text={'Каталог'}/>
                                <RadioCheckbox text={'Сохранение информации в Google документы'}/>
                                <RadioCheckbox text={'Нужна консультация'}/>
                                <RadioCheckbox text={'Другие'}/>
                            </div>
                        </div>
                        <Input label={'Есть ли определенная CMS система, на которой нужно сделать сайт?'}
                               required={false}
                               placeholder={'Например Tilda, WordPress и др.'}
                               {...register('specificSystem')}
                               errorMessage={errors.specificSystem?.message}
                        />
                        <FormRadioGroup control={control}
                                        name={'seo'}
                                        mainLabel={'SEO-Оптимизация'} required={true}
                                        radioItems={[
                                            {label: 'Да, нужна', value: 'yes'},
                                            {label: 'Нет, не нужна', value: 'no'},
                                            {label: 'Свой специалист', value: 'ownSpecialist'},
                                            {label: 'Нужна консультация', value: 'needConsultation'},
                                        ]}
                        />
                        <FormRadioGroup control={control}
                                        name={'copywriting'}
                                        mainLabel={'Копирайтинг'} required={true}
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
                        <FormRadioGroup control={control}
                                        name={'knowTargetAudience'}
                                        mainLabel={'Знаете ли вы свою ЦА'} required={true}
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
                                            placeholder={'Гипотетический доход пользователя, средняя месячная зарплата'}
                                            name={'income'}
                                            control={control}
                        />
                        <FormInputMultiline label={`Интересы`}
                                            required
                                            placeholder={'Чем интересуется целевая аудитория, например — спорт, туризм и т.д.'}
                                            name={'interests'}
                                            control={control}
                        />
                        <FormInputMultiline label={`Этапы взаимодействия пользователя с продуктом`}
                                            required
                                            placeholder={'Опишите путь пользователя от контакта до заказа'}
                                            name={'useInteractionStages'}
                                            control={control}
                        />
                        <FormInputMultiline label={`Каналы коммуникации с ЦА`}
                                            required={false}
                                            placeholder={'Телефонный звонок, переписка в мессенджерах, почта, соц. сети и т.д.'}
                                            name={'communicationChannels'}
                                            control={control}
                        />
                        <FormInputMultiline label={`Интенсивность употребления`}
                                            required
                                            placeholder={'Как часто будет совершаться повторная покупка/заказ'}
                                            name={'intensityOfUse'}
                                            control={control}
                        />
                    </div>
                </section>

                <section className={s.section} id={'materials'}>
                    <div>
                        <BriefNavbar navItems={briefSections}/>
                    </div>
                    <div className={s.fields}>
                        <h2>Материалы</h2>
                        <FormRadioGroup control={control}
                                        name={'materialsDevelopment'}
                                        mainLabel={'Требуется ли разработка дополнительных материалов'} required={true}
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
                        <FormRadioGroup control={control}
                                        name={'numberOfLanguageVersions'}
                                        mainLabel={'Кол-во языковых версий'} required={true}
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
                        <FormRadioGroup control={control}
                                        name={'technicalSpecificationAvailable'}
                                        mainLabel={'Есть ли Техническое Задание'} required={true}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                        ]}
                        />

                        <InputAdditionalFile label={'Прикрепите ТЗ'}
                                             {...register('technicalSpecification')}
                        />
                        <FormRadioGroup control={control}
                                        name={'siteAdministration'}
                                        mainLabel={'Требуется ли администрирование сайта после запуска'} required={true}
                                        radioItems={[
                                            {label: 'Да', value: 'yes'},
                                            {label: 'Нет', value: 'no'},
                                        ]}
                        />
                        <FormInputMultiline label={`Дополнительная информация`}
                                            required={false}
                                            placeholder={'Дополнительная информация по проекту'}
                                            name={'additionalInfo'}
                                            control={control}
                                            errorMessage={errors.additionalInfo?.message}
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