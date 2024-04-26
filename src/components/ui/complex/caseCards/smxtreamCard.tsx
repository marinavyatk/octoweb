import {CaseCard} from "../../primitive/caseCard/caseCard.tsx";
import {ComponentPropsWithoutRef} from "react";
import Smxtream from '../../../../assets/webp/case-smxtream.webp'


export type SmxtreamCardProps = ComponentPropsWithoutRef<'figure'>
export const SmxtreamCard = (props: SmxtreamCardProps) => {
    const {...restProps} = props;
    return <CaseCard category={'КОРПОРАТИВНЫЙ САЙТ'}
                     tags={["DEVELOP", "UI/UX", "SEO"]}
                     img={Smxtream}
                     size={'medium'}
                     header={'smxtream.pro'}
                     as={'h3'}
                     {...restProps}
    href={"https://chat.openai.com/c/7350bbd7-ba2a-40d8-8cb6-ebcaac380187"}/>
}
