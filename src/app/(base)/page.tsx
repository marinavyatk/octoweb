import {GreetingDescription} from "@/components/layouts/greetingDescription/greetingDescription";
import {AboutCard} from "@/components/sections/aboutCard/aboutCard";
import {ServicesLinksList} from "@/components/sections/servicesLinksList/servicesLinksList";
import {StepCards} from "@/components/sections/stepCards/stepCards";
import s from "./page.module.scss";
import {Greeting} from "@/components/sections/greeting/greeting";
import {BigBubble} from "@/components/video/bigBubble";
import {SmallBubble} from "@/components/video/smallBubble";
import {AdvantagesCards} from "@/components/sections/advantagesCards/advantagesCards";
import {api} from "@/common/api";
import {WorkStage} from "@/common/types";
import {getMetaDataObj} from "@/common/commonFunctions";
import Script from "next/script";
import {cache} from "react";
import dynamic from "next/dynamic";
const Cases = dynamic(() => import("@/components/sections/cases/cases"), {ssr: false});


const getCachedSeo = cache(async () => {
    return await api.getMainSeo();
});

export async function generateMetadata() {
    const metadata = await getCachedSeo();
    if (!metadata) return {};

    return getMetaDataObj(metadata);
}


export default async function Home() {
    const [cases, services, stages, teamPhoto, seo] = await Promise.all([api.getCases(1, null), api.getServices(), api.getInteractionStages(), api.getTeamPhoto(), getCachedSeo()]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const casesForSection = cases?.cases.splice(0, 4).map(({imgFullWidth, ...rest}) => rest);

    const formattedServices = services?.map(serviceCategory => {
        return {
            number: serviceCategory.service_number,
            header: serviceCategory.title,
            mainLink: serviceCategory.url,
            image: serviceCategory.image,
            tags: serviceCategory.child_services.map(service => {
                return {text: service.title, subLink: service.serviceId};
            })
        };
    });

    const stepCards = stages?.map((stage: WorkStage) => ({
        stepNumber: String(stage.number || ""),
        header: stage.title,
        description: stage.text
    }));

    const content = {
        firstLine: "МЫ РЕВОЛЮЦИОНЕРЫ",
        secondLine: "В СФЕРЕ",
        thirdLine: "ИЗ КРАСНОДАРА",
        wordSwipeProps: {words: ["web", "seo"]}
    };

    const schema = seo?.schema;

    return (
        <>
            <div className={s.mainPage}>
                <div className={"mainContainer"}>
                    <div className={s.mainBubblesContainer}>
                        <BigBubble className={s.bigBubbleMain}/>
                        <SmallBubble className={s.smallBubbleMain}/>
                    </div>
                    <Greeting textContent={content}/>
                    <h1 className={s.hiddenHeader}>Создаем сайты для бизнеса</h1>
                    <GreetingDescription className={s.greetingDescription}/>
                </div>
                {teamPhoto &&
                    <AboutCard className={s.about} teamPhoto={teamPhoto}/>
                }
                <AdvantagesCards/>
                <div className={"mainContainer"}>
                    <Cases cases={casesForSection || []}/>
                </div>
                <ServicesLinksList linksData={formattedServices || []} className={s.services}/>
                <div className={s.servicesBubbles}>
                    <SmallBubble className={s.smallBubbleServices}/>
                </div>
                <StepCards className={s.steps} stepCards={stepCards}/>
            </div>
            {schema &&
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
                    id="main"
                    strategy="beforeInteractive"
                ></Script>
            }
        </>
    );
};
