import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './footerWithoutForm.module.scss';
import FooterFormImg from '../../../../assets/footerForm.png'
import {Footer} from '../footer/footer.tsx';


export type FooterWithoutFormProps = ComponentPropsWithoutRef<'div'>

export const FooterWithoutForm = (props: FooterWithoutFormProps) => {
    const {...restProps} = props;
    const className = clsx(s.footerWithoutForm, restProps.className)
    return <div {...restProps} className={className}>
        <img src={FooterFormImg} className={s.FooterFormImg} alt=""/>
        <Footer/>
    </div>

}