import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './form.module.scss';
import {Input} from '../../primitive/input/input.tsx';
import {FormInputWithCounter} from '../../primitive/inputWithCounter/inputWithCounter.tsx';
import {useForm} from 'react-hook-form'
import {Checkbox} from '../../primitive/checkbox/checkbox.tsx';
import {ArrowButtonWithText} from '../../primitive/arrowButtonWithText/arrowButtonWithText.tsx';
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB

const fileSchema = z.custom<
    FileList>()
    .refine((fileList) => {
        if (fileList[0] === undefined) return true;
        return fileList[0] && fileList[0]?.size <= MAX_UPLOAD_SIZE;
    }, 'Размер файла не более 5mb')

const formSchema = z.object({
    name: z.string().min(1, {message: 'Это обязательное поле'}),
    nameFile: fileSchema,
    email: z.string().email(),
    emailFile: fileSchema,
    tel: z.string().min(1, {message: 'Это обязательное поле'}),
    telFile: fileSchema,
    projectDescription: z.string().min(1, {message: 'Это обязательное поле'}).max(500, {message: 'Максимум 500 символов'}),
    projectDescriptionFile: fileSchema,
    mailing: z.boolean()
})

type FormValues = z.infer<typeof formSchema>
export type FormProps = ComponentPropsWithoutRef<'div'>

export const Form = (props: FormProps) => {

    const {...restProps} = props;
    const className = clsx(s.form, restProps.className)
    const {register, control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: undefined,
            nameFile: undefined,
            email: undefined,
            emailFile: undefined,
            tel: undefined,
            telFile: undefined,
            projectDescription: undefined,
            projectDescriptionFile: undefined,
            mailing: false
        },
        mode: 'onBlur'
    })

    console.log(errors)

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    return <div {...restProps} className={className}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.mainInfo}>
                <Input label={'Имя'}
                       required
                       {...register('name')}
                       fileProps={{...register('nameFile')}}
                       placeholder={'Как вас зовут?'}
                       className={s.item}
                       errorMessage={[errors.name?.message, errors.nameFile?.message]}
                />
                <Input label={'email'}
                       required
                       {...register('email')}
                       type={'email'}
                       fileProps={{...register('emailFile')}}
                       placeholder={'Электронная почта'}
                       className={s.item}
                       errorMessage={[errors.email?.message, errors.emailFile?.message]}
                />
                <Input label={'Номер телефона'}
                       required
                       {...register('tel')}
                       fileProps={{...register('telFile')}}
                       placeholder={'+7 (900) 000 00 00'}
                       className={s.item}
                       errorMessage={[errors.tel?.message, errors.telFile?.message]}
                />
            </div>
            <FormInputWithCounter label={'О проекте'}
                                  required
                                  placeholder={'Расскажите о своем проекте'}
                                  control={control}
                                  name={'projectDescription'}
                                  fileProps={{...register('projectDescriptionFile')}}
                                  errorMessage={[errors.projectDescription?.message, errors.projectDescriptionFile?.message]}
            />
            <Checkbox
                {...register('mailing')}
                text={'Хочу получать информационные и рекламные письма от OctoWeb'}
                className={s.checkbox}
            />
            <div className={s.submit}>
                <p>Я принимаю условия <a href={'#'}>Политика ООО OctoWeb в отношении обработки данных</a> и, нажимая на
                    кнопку
                    “Отправить”, даю согласие на обработку компанией указанных мной персональных данных</p>
                <ArrowButtonWithText text={'Отправить'} buttonProps={{type: 'submit', as: 'button'}}
                                     className={s.arrowButton}/>
            </div>
        </form>
    </div>

}


