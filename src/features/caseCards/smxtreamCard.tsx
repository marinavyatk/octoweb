import {CaseCard} from "../../components/ui/caseCard/caseCard.tsx";
import SmxtreamPng from '../../assets/caseImages/smxtream.png'
import SmxtreamPng2x from '../../assets/caseImages/smxtream-2x.png'
import SmxtreamPng3x from '../../assets/caseImages/smxtream-3x.png'
import SmxtreamWebp from '../../assets/caseImages/smxtream.webp'
import SmxtreamWebp2x from '../../assets/caseImages/smxtream-2x.webp'
import SmxtreamWebp3x from '../../assets/caseImages/smxtream-3x.webp'
import {ComponentPropsWithoutRef} from "react";

export type SmxtreamCardProps = ComponentPropsWithoutRef<'figure'>
export const SmxtreamCard = (props: SmxtreamCardProps) => {
    const {...restProps} = props;
    return <CaseCard title={'КОРПОРАТИВНЫЙ САЙТ'}
                     tags={["DEVELOP", "UI/UX", "SEO"]}
                     img={{
                         png1x: SmxtreamPng, png2x: SmxtreamPng2x, png3x: SmxtreamPng3x,
                         webp1x: SmxtreamWebp, webp2x: SmxtreamWebp2x, webp3x: SmxtreamWebp3x
    }}
                     size={'medium'}
                     caption={'smxtream.pro'}
                     {...restProps}/>
}
