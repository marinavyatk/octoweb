import type {Meta, StoryObj} from '@storybook/react';
import {RadioCheckboxGroup} from '@/components/ui/radioCheckboxGroup/radioCheckboxGroup';

const meta = {
    title: "UI/RadioCheckboxGroup",
    component: RadioCheckboxGroup,
    tags: ["autodocs"],
} satisfies Meta<typeof RadioCheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        mainLabel: 'Способ связи',
        isRequiredField: true,
        checkboxItems: [
            {
                label: 'Telegram',
                value: 'telegram',
                rest: {type: 'checkbox', checked: true},
            },
            {
                label: 'Skype',
                value: 'skype',
                rest: {type: 'checkbox', checked: false},
            },
            {
                label: 'WhatsApp',
                value: 'whatsApp',
                rest: {type: 'checkbox', checked: true},
            },
            {
                label: 'Email',
                value: 'email',
                rest: {type: 'checkbox', checked: false},
            },
            {
                label: 'Звонок',
                value: 'call',
                rest: {type: 'checkbox', checked: false},
            },
        ]
    }
};

