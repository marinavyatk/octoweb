import {ComponentPropsWithoutRef} from 'react';
import {clsx} from 'clsx';
import s from './accordionButton.module.scss'


export type AccordionButtonProps = {
    opened: boolean,
    setOpened: (opened: boolean) => void
} & ComponentPropsWithoutRef<'div'>

export const AccordionButton = (props: AccordionButtonProps) => {
    // const [opened, setOpened] = useState(false)
    const {opened, setOpened, ...restProps} = props;
    const className = clsx(
        s.buttonContainer,
        restProps.className,
        {[s.opened]: opened}
    )

    return <div {...restProps} className={className} onClick={() => setOpened(!opened)}>
        <div className={s.closedBackground}></div>
        <div className={s.horizontal}></div>
        <div className={s.vertical}></div>
    </div>
}