module.exports = function(api) {
    api.cache.forever();

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'usage',
                    shippedProposals: true,
                    spec: true,
                    loose: false,
                    debug: false,
                    targets: {
                        node: 'current',
                    },
                },
            ],
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
    };
};
