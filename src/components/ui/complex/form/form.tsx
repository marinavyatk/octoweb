import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './form.module.scss';
import {Input} from '../../primitive/input/input.tsx';
import {FormInputWithCounter} from '../../primitive/inputWithCounter/inputWithCounter.tsx';
import {useForm} from 'react-hook-form'

type FormValues = {
    name: string
    nameFile: File | undefined
    email: string
    emailFile: File | undefined
    tel: string,
    telFile: File | undefined
    projectDescription: string,
    projectDescriptionFile: File | undefined
    mailing: boolean
}

export type FormProps = ComponentPropsWithoutRef<'div'>

export const Form = (props: FormProps) => {

    const {...restProps} = props;
    const className = clsx(s.form, restProps.className)
    const {register, control, handleSubmit} = useForm<FormValues>({
        defaultValues: {
            name: '',
            nameFile: undefined,
            email: '',
            tel: '',
            projectDescription: '',
            mailing: false
        }
    })

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
                />
                <Input label={'email'}
                       required
                       {...register('email')}
                       type={'email'}
                       fileProps={{...register('emailFile')}}
                       placeholder={'Электронная почта'}
                       className={s.item}
                />
                <Input label={'Номер телефона'}
                       required
                       {...register('tel')}
                       fileProps={{...register('telFile')}}
                       placeholder={'+7 (900) 000 00 00'}
                       className={s.item}
                />
            </div>

            <FormInputWithCounter label={'О проекте'}
                                  required
                                  control={control}
                                  name={'projectDescription'}
                                  inputProps={{...register('projectDescriptionFile')}}
            />

            <p>Я принимаю условия <a href={'#'}>Политика ООО OctoWeb в отношении обработки данных</a> и, нажимая на
                кнопку
                “Отправить”, даю согласие на обработку компанией указанных мной персональных данных</p>
            {/*<ArrowButtonWithText text={'Отправить'} type="submit"/>*/}
            <button type="submit">Отправить</button>
        </form>
    </div>

}


