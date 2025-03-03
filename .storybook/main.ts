import { StorybookConfig } from "@storybook/nextjs";
import { RuleSetRule } from "webpack";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/nextjs",
  addons: ["@storybook/addon-docs"],
  staticDirs: ["public"],
  webpackFinal: async (config) => {
    const rules = config.module?.rules as RuleSetRule[] | undefined;
    if (rules) {
      const fileLoaderRule = rules.find(
        (rule) => rule.test instanceof RegExp && rule.test.test(".svg"),
      );

      if (fileLoaderRule) {
        rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        });

        fileLoaderRule.exclude = /\.svg$/i;
      }
    }

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "../src"),
      public: path.resolve(__dirname, "../public"),
    };

    return config;
  },
};

export default config;
