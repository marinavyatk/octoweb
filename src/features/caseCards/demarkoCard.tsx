import {CaseCard} from "../../components/ui/caseCard/caseCard.tsx";
import DemarkoPng from "../../assets/caseImages/de-marko.png";
import DemarkoPng2x from "../../assets/caseImages/de-marko-2x.png";
import DemarkoPng3x from "../../assets/caseImages/de-marko-3x.png";
import DemarkoWebp from "../../assets/caseImages/de-marko.webp";
import DemarkoWebp2x from "../../assets/caseImages/de-marko-2x.webp";
import DemarkoWebp3x from "../../assets/caseImages/de-marko-3x.webp";
import {ComponentPropsWithoutRef} from "react";

export type DemarkoCardProps = ComponentPropsWithoutRef<'figure'>
export const DemarkoCard = (props: DemarkoCardProps) => {
    const {...restProps} = props;
    return <CaseCard title={"ИНТЕРНЕТ-МАГАЗИН"}
                     tags={["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ"]}
                     img={{
                         png1x: DemarkoPng, png2x: DemarkoPng2x, png3x: DemarkoPng3x,
                         webp1x: DemarkoWebp, webp2x: DemarkoWebp2x, webp3x: DemarkoWebp3x

                     }}
                     size={'extraLarge'}
                     caption={"de-marko.ru"}
                     {...restProps} />
}