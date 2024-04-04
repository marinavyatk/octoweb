import {CaseCard} from "../primitive/caseCard/caseCard.tsx";
import {ComponentPropsWithoutRef} from "react";
import Smxtream from '../../../assets/webp/case-smxtream.webp'


export type SmxtreamCardProps = ComponentPropsWithoutRef<'figure'>
export const SmxtreamCard = (props: SmxtreamCardProps) => {
    const {...restProps} = props;
    return <CaseCard title={'КОРПОРАТИВНЫЙ САЙТ'}
                     tags={["DEVELOP", "UI/UX", "SEO"]}
                     img={Smxtream}
                     size={'medium'}
                     caption={'smxtream.pro'}
                     {...restProps}/>
}
