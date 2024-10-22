/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(gltf)$/,
                use: [
                    {
                        loader: 'file-linearLoader',
                        options: {
                            outputPath: 'models/',
                            publicPath: '/models/',
                        },
                    },
                ],
            }
        );
        return config;
    },

    async rewrites() {
        return [
            {
                source: '/storybook/:path*',
                destination: '/storybook/index.html',
            },
        ];
    },
};

export default nextConfig;