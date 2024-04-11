import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './form.module.scss';
import {ArrowButtonWithText} from '../../primitive/arrowButtonWithText/arrowButtonWithText.tsx';


export type FormProps = ComponentPropsWithoutRef<'div'>

export const Form = (props: FormProps) => {
    const {...restProps} = props;
    const className = clsx(s.form, restProps.className)

    return <div {...restProps} className={className}>

        <p>Я принимаю условия <a href={'#'}>Политика ООО OctoWeb в отношении обработки данных</a> и, нажимая на кнопку
            “Отправить”, даю согласие на обработку компанией указанных мной персональных данных</p>
        <ArrowButtonWithText text={"Отправить"}/>
    </div>

}