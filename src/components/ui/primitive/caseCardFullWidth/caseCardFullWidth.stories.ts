import type {Meta, StoryObj} from '@storybook/react'
import CaseCardFullWidthImg from '../../../../assets/webp/caseCardFullWidth.png';
import {CaseCardFullWidth} from './caseCardFullWidth.tsx';

const meta = {
    title: 'Components/CaseCardFullWidth',
    component: CaseCardFullWidth,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CaseCardFullWidth>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        category: 'Корпоративный сайт',
        tags: ['Develop', 'ux/ui', 'seo'],
        img: CaseCardFullWidthImg,
        header: 'de-marko.ru'
    },
}
