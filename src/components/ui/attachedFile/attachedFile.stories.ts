import type {Meta, StoryObj} from '@storybook/react';
import {AttachedFile} from '@/components/ui/attachedFile/attachedFile';

const meta = {
    title: 'UI/AttachedFile',
    component: AttachedFile,
    tags: ['autodocs'],
} satisfies Meta<typeof AttachedFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        fileName: 'project description.docx',
        onDeleteClick: () => {}
    },
};
