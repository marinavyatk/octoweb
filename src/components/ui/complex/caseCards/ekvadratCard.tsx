import {CaseCard} from "../../primitive/caseCard/caseCard.tsx";
import {ComponentPropsWithoutRef} from "react";
import Ekvadrat from '../../../../assets/webp/case-e-kvadrat.webp'


export type EkvadratCardProps = ComponentPropsWithoutRef<'figure'>
export const EkvadratCard = (props: EkvadratCardProps) => {
    const {...restProps} = props;
    return <CaseCard category={"КОРПОРАТИВНЫЙ САЙТ"}
                     tags={["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ", "SEO"]}
                     img={Ekvadrat}
                     size={'large'}
                     caption={"ekvadrat23.ru"}
                     {...restProps} />
}