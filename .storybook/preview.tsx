import type {Preview} from '@storybook/react';
import '../src/styles/index.scss';
import './style.css';
import {themes} from '@storybook/core/theming';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        docs: {
            theme: themes.dark,
        },
        backgrounds: {
            default: "dark",
            values: [
                {
                    name: "dark",
                    value: "#000000",
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        nextjs: {
            appDirectory: true,
        },
    },
};

export default preview;
