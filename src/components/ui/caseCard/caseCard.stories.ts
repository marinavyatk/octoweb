import type {Meta, StoryObj} from '@storybook/react'
import {CaseCard} from "./caseCard.tsx";
import BotanicaPng1x from "../../../assets/caseImages/botanica.png";
import BotanicaPng2x from "../../../assets/caseImages/botanica-2x.png";
import BotanicaPng3x from "../../../assets/caseImages/botanica-3x.png";
import BotanicaWebp1x from "../../../assets/caseImages/botanica.webp";
import BotanicaWebp2x from "../../../assets/caseImages/botanica-2x.webp";
import BotanicaWebp3x from "../../../assets/caseImages/botanica-3x.webp";

const meta = {
    title: 'Components/CaseCard',
    component: CaseCard,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CaseCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: "LANDING PAGE",
        tags: ["DEVELOP", "UI/UX", "SEO"],
        img: {
            png1x: BotanicaPng1x, png2x: BotanicaPng2x, png3x: BotanicaPng3x,
            webp1x: BotanicaWebp1x, webp2x: BotanicaWebp2x, webp3x: BotanicaWebp3x
        },
        size: 'small',
        caption: "ботаника-хилс.рф"
    },
}