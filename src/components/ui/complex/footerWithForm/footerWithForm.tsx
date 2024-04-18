import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './footerWithForm.module.scss';
// import SecondaryFolderForm from '../../../../assets/secondaryFolderForm.png'
import {Footer} from '../footer/footer.tsx';
import {Form} from '../form/form.tsx';

export type FooterWithFormProps = ComponentPropsWithoutRef<'div'>

export const FooterWithForm = (props: FooterWithFormProps) => {
    const {className, ...restProps} = props;
    const classNames = clsx(s.footerWithForm, className)

    return <div {...restProps} className={classNames}>
        {/*<img src={SecondaryFolderForm} className={s.secondaryFormImg} alt=""/>*/}
        <div className={s.formContainer}>
            <span className={s.title}>Давайте начнем работать прямо сейчас</span>
            <Form/>
        </div>
        <Footer/>
    </div>
}