import {CaseCard} from "../../primitive/caseCard/caseCard.tsx";
import {ComponentPropsWithoutRef} from "react";
import Demarko from '../../../../assets/webp/case-de-marko.webp'

export type DemarkoCardProps = ComponentPropsWithoutRef<'figure'>
export const DemarkoCard = (props: DemarkoCardProps) => {
    const {...restProps} = props;
    return <CaseCard category={"ИНТЕРНЕТ-МАГАЗИН"}
                     tags={["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ"]}
                     img={Demarko}
                     size={'extraLarge'}
                     header={"de-marko.ru"}
                     {...restProps} />
}