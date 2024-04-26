import s from './briefPage.module.scss'
import {Header} from '../../components/ui/complex/header/header.tsx';
import {FooterWithoutForm} from '../../components/ui/complex/footerWithoutForm/footerWithoutForm.tsx';
import {BriefNavbar} from '../../components/ui/primitive/briefNavbar/briefNavbar.tsx';
import {Input} from '../../components/ui/primitive/input/input.tsx';
import {RadioCheckbox} from '../../components/ui/primitive/radioCheckbox/radioCheckbox.tsx';
import {InputMultiline} from '../../components/ui/primitive/inputMultiline/inputMultiline.tsx';
import {RadioButton} from '../../components/ui/primitive/radioButton/radioButton.tsx';
import {InputAdditionalFile} from '../../components/ui/primitive/inputAdditionalFile/inputAdditionalFile.tsx';
import {ArrowButtonWithText} from '../../components/ui/primitive/ArrowButtonWithText/arrowButtonWithText.tsx';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';


const fileSchema = z.custom<FileList>()
const required = z.string().min(1, {message: 'Это обязательное поле'}).max(500, {message: 'Длина не более 500 символов'})

const radio = z.string() //temp


const formSchema = z.object({
    //contactInfo
    name: required,
    position: required.optional(),
    tel: required,
    email: required.email(),
    communicationWay: radio,

    //about
    companyName: required,
    semantics: required.optional(),
    field: required,
    productsAndServices: required,
    productsAndServicesDescription: required,
    priorityProductsAndServices: required,
    offerUniqueness: required,
    disadvantages: required,
    geography: required,
    shortCompanyInfo: required.optional(),
    site: required.optional(),
    socialNetworks: required.optional(),
    competitors: required,

    //details
    siteType: radio,
    goals: required,
    usersTargetAction: radio,
    competitorsSites: required,
    advantagesCompetitorsSites: required,
    disadvantagesCompetitorsSites: required,
    sitesYouLike: required.optional(),
    sitesYouDislike: required.optional(),
    preferredColors: required.optional(),
    unwantedColors: required.optional(),
    siteFunctionality: radio,
    specificSystem: required.optional(),
    seo: radio,
    copywriting: radio,

    //targetGroup
    knowTargetAudience: radio,
    sex: required,
    age: required,
    income: required,
    interests: required,
    useInteractionStages: required,
    communicationChannels: required.optional(),
    intensityOfUse: required,

    //materials
    materialsDevelopment: radio,
    materialsToDevelop: required,

    //additionalInfo
    numberOfLanguageVersions: radio,
    budget: required,
    technicalSpecificationAvailable: radio,
    technicalSpecification: fileSchema.optional(),
    siteAdministration: radio,
    additionalInfo: required.optional(),
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
            siteType: '',
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
            seo: '',
            copywriting: '',

            //targetGroup
            knowTargetAudience: '',
            sex: '',
            age: '',
            income: '',
            interests: '',
            useInteractionStages: '',
            communicationChannels: '',
            intensityOfUse: '',

            //materials
            materialsDevelopment: '',
            materialsToDevelop: '',

            //additionalInfo
            numberOfLanguageVersions: '',
            budget: '',
            technicalSpecificationAvailable: '',
            technicalSpecification: {} as FileList,
            siteAdministration: '',
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
                        <InputMultiline label={'Семантика названия'}
                                        required={false}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <Input label={'Ниша'}
                               required
                               {...register('field')}
                               errorMessage={errors.field?.message}
                        />
                        <InputMultiline label={'Ряд продуктов и услуг'}
                                        required
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={'Описание продукта или услуги'}
                                        required
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <Input label={'Приоритетные товары и услуги'}
                               required
                               {...register('priorityProductsAndServices')}
                               errorMessage={errors.priorityProductsAndServices?.message}
                        />
                        <InputMultiline label={'Уникальность предложения'}
                                        required
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={'Недостатки услуги или продукта'}
                                        required
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={'География продукта/услуги'}
                                        required
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={'Краткая информация о компании'}
                                        required={false}
                                        onChange={() => {
                                        }}
                                        value={'j'}
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
                               required={false}
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
                        <div>
                            <span className={s.label}>
                                Тип сайта
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioButton text={'Лендинг'}/>
                                <RadioButton text={'Сайт-визитка'}/>
                                <RadioButton text={'Интернет-магазин'}/>
                                <RadioButton text={'Информационный сайт'}/>
                                <RadioButton text={'Корпоративный сайт'}/>
                                <RadioButton text={'Лонгрид'}/>
                                <RadioButton text={'Нужна консультация'}/>
                            </div>
                        </div>
                        <InputMultiline label={'Цели, которые должен решить сайт'}
                                        required
                                        placeholder={'Например: увеличить конверсию, рассказать о бизнесе, привлечь и т.д.'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
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
                        <InputMultiline label={'Чем нравятся сайты конкурентов'}
                                        required
                                        placeholder={'Укажите сильные стороны сайтов конкурентов'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={`Чем нравятся сайты конкурентов`}
                                        required
                                        placeholder={'Укажите сильные стороны сайтов конкурентов'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <Input label={'Сайты, которые нравятся'}
                               required
                               placeholder={'Сайты не конкурентов, которые вам нравятся, и почему'}
                               {...register('sitesYouLike')}
                               errorMessage={errors.sitesYouLike?.message}
                        />
                        <Input label={'Сайты, которые не нравятся'}
                               required
                               placeholder={'Сайты не конкурентов, которые вам не нравятся, и почему'}
                               {...register('sitesYouDislike')}
                               errorMessage={errors.sitesYouDislike?.message}
                        />
                        <InputMultiline label={`Предпочитаемые цвета`}
                                        required
                                        placeholder={'Укажите предпочтения в цвете, если они есть'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={`Нежелательные цвета`}
                                        required
                                        placeholder={'Укажите цвета, которые не подходит вашему продукту'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
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
                        <div>
                            <span className={s.label}>
                                SEO-Оптимизация
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioButton text={'Да, нужна'}/>
                                <RadioButton text={'Нет, не нужна'}/>
                                <RadioButton text={'Свой специалист'}/>
                                <RadioButton text={'Нужна консультация'}/>
                            </div>
                        </div>
                        <div>
                            <span className={s.label}>
                                Копирайтинг
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioButton text={'Да, нужна'}/>
                                <RadioButton text={'Нет, не нужна'}/>
                                <RadioButton text={'Свой специалист'}/>
                                <RadioButton text={'Нужна консультация'}/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={s.section} id={'targetGroup'}>
                    <div>
                        <BriefNavbar navItems={briefSections}/>
                    </div>
                    <div className={s.fields}>
                        <h2>Целевая аудитория</h2>
                        <div>
                            <span className={s.label}>
                                Знаете ли вы свою ЦА
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioButton text={'Да'}/>
                                <RadioButton text={'Нет'}/>
                                <RadioButton text={'Нужна проработка'}/>
                            </div>
                        </div>
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
                        <InputMultiline label={`Достаток`}
                                        required
                                        placeholder={'Гипотетический доход пользователя, средняя месячная зарплата'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={`Интересы`}
                                        required
                                        placeholder={'Чем интересуется целевая аудитория, например — спорт, туризм и т.д.'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={`Этапы взаимодействия пользователя с продуктом`}
                                        required
                                        placeholder={'Опишите путь пользователя от контакта до заказа'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={`Каналы коммуникации с ЦА`}
                                        required={false}
                                        placeholder={'Телефонный звонок, переписка в мессенджерах, почта, соц. сети и т.д.'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputMultiline label={`Интенсивность употребления`}
                                        required
                                        placeholder={'Как часто будет совершаться повторная покупка/заказ'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                    </div>
                </section>

                <section className={s.section} id={'materials'}>
                    <div>
                        <BriefNavbar navItems={briefSections}/>
                    </div>
                    <div className={s.fields}>
                        <h2>Материалы</h2>
                        <div>
                            <span className={s.label}>
                                Требуется ли разработка дополнительных материалов
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioButton text={'Да'}/>
                                <RadioButton text={'Нет'}/>
                            </div>
                        </div>
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
                        <div>
                            <span className={s.label}>
                                Кол-во языковых версий
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioButton text={'1'}/>
                                <RadioButton text={'2'}/>
                                <RadioButton text={'Больше 2-ух'}/>
                            </div>
                        </div>
                        <Input label={'Планируемый или рассчитанный бюджет'}
                               required
                               placeholder={'Например: 100-200 т.р.'}
                        />
                        <div>
                            <span className={s.label}>
                                Есть ли Техническое Задание
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioButton text={'Да'}/>
                                <RadioButton text={'Нет'}/>
                            </div>
                        </div>
                        <InputAdditionalFile label={'Прикрепите ТЗ'}/>
                        <div>
                            <span className={s.label}>
                                Требуется ли администрирование сайта после запуска
                                <sup className={s.required}> *</sup>
                            </span>
                            <div className={s.radioButtons}>
                                <RadioButton text={'Да'}/>
                                <RadioButton text={'Нет'}/>
                                <RadioButton text={'Пока неизвестно'}/>
                            </div>
                        </div>
                        <InputMultiline label={`Дополнительная информация`}
                                        required
                                        placeholder={'Дополнительная информация по проекту'}
                                        onChange={() => {
                                        }}
                                        value={'j'}
                        />
                        <InputAdditionalFile label={'Дополнительные файлы'}/>
                    </div>
                </section>

                <div className={s.submit}>
                    <p>Я принимаю условия <a href={'#'} rel={'nofollow'}>Политика ООО OctoWeb в отношении обработки
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