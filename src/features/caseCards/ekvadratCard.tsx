import {CaseCard} from "../../components/ui/caseCard/caseCard.tsx";
import EkvadratPng from "../../assets/caseImages/e-kvadrat.png";
import EkvadratPng2x from "../../assets/caseImages/e-kvadrat-2x.png";
import EkvadratPng3x from "../../assets/caseImages/e-kvadrat-3x.png";
import EkvadratWebp from "../../assets/caseImages/e-kvadrat.webp";
import EkvadratWebp2x from "../../assets/caseImages/e-kvadrat-2x.webp";
import EkvadratWebp3x from "../../assets/caseImages/e-kvadrat-3x.webp";
import {ComponentPropsWithoutRef} from "react";

export type EkvadratCardProps = ComponentPropsWithoutRef<'figure'>
export const EkvadratCard = (props: EkvadratCardProps) => {
    const {...restProps} = props;
    return <CaseCard title={"КОРПОРАТИВНЫЙ САЙТ"}
                     tags={["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ", "SEO"]}
                     img={{
                         png1x: EkvadratPng, png2x: EkvadratPng2x, png3x: EkvadratPng3x,
                         webp1x: EkvadratWebp, webp2x: EkvadratWebp2x, webp3x: EkvadratWebp3x

                     }}
                     size={'large'}
                     caption={"ekvadrat23.ru"}
                     {...restProps} />
}