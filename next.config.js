module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
            },
        ],
        minimumCacheTTL: 10,
    },
}