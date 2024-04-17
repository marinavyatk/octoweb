import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";
import {Stack} from "../../primitive/stack/stack.tsx";
import s from './stackList.module.scss'

export type StackListProps = ComponentPropsWithoutRef<'div'>

export const StackList = (props: StackListProps) => {
    const {className, ...restProps} = props;
    const classNames = clsx(s.list, className)
    const stackData = [
        {
            number: '01',
            title: 'Backend',
            tags: ['PHP', 'Laravel', 'Node.js']
        },
        {
            number: '02',
            title: 'Frontend',
            tags: ['React', 'Vue.js', 'JavaScript', 'jQuery']
        },
        {
            number: '03',
            title: 'UI/UX',
            tags: ['Figma', 'Sketch', 'Illustrator', 'Photoshop'],
        },
        {
            number: '04',
            title: 'CMS',
            tags: ['1C-Битрикс', 'WordPress', 'MODX', 'Drupal', 'Tilda', 'OpenCart'],

        }
    ]

    const stackTechList = stackData.map(stack => {
        return <Stack number={stack.number} title={stack.title} tags={stack.tags} key={stack.number}/>
    })


    return <div {...restProps} className={classNames}>
        {stackTechList}
    </div>

}