import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './form.module.scss';
import {Input} from '../../primitive/input/input.tsx';

import {useForm} from 'react-hook-form'
import {Checkbox} from '../../primitive/checkbox/checkbox.tsx';
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod';
import {FormInputWithCounter} from '../../primitive/inputWithCounter/FormInputWithCounter.tsx';
import {ArrowButtonWithText} from '../../primitive/ArrowButtonWithText/arrowButtonWithText.tsx';


const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB

const fileSchema = z.custom<
    FileList>()
    .refine((fileList) => {
        if (fileList[0] === undefined) return true;
        return fileList[0] && fileList[0]?.size <= MAX_UPLOAD_SIZE;
    }, 'Размер файла не более 5mb')

const formSchema = z.object({
    name: z.string().min(1, {message: 'Это обязательное поле'}),
    email: z.string().email(),
    tel: z.string().min(1, {message: 'Это обязательное поле'}),
    projectDescription: z.string().min(1, {message: 'Это обязательное поле'}).max(500, {message: 'Максимум 500 символов'}),
    projectDescriptionFile: fileSchema,
    mailing: z.boolean()
})

type FormValues = z.infer<typeof formSchema>
export type FormProps = ComponentPropsWithoutRef<'div'>

export const Form = (props: FormProps) => {

    const {className, ...restProps} = props;
    const classNames = clsx(s.form, className)
    const {register, control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: undefined,
            email: undefined,
            tel: undefined,
            projectDescription: undefined,
            projectDescriptionFile: undefined,
            mailing: false
        },
        mode: 'onBlur'
    })
    console.log(control)
    console.log(errors)

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    return <div {...restProps} className={classNames}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.mainInfo}>
                <Input label={'Имя'}
                       required
                       {...register('name')}
                       placeholder={'Как вас зовут?'}
                       className={s.item}
                       errorMessage={errors.name?.message}
                />
                <Input label={'email'}
                       required
                       {...register('email')}
                       type={'email'}
                       placeholder={'Электронная почта'}
                       className={s.item}
                       errorMessage={errors.email?.message}
                />
                <Input label={'Номер телефона'}
                       required
                       {...register('tel')}
                       placeholder={'+7 (900) 000 00 00'}
                       className={s.item}
                       errorMessage={errors.tel?.message}
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
}


