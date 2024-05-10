import "dotenv/config";

export default ({ config }) => ({
    ...config,
    extra: {
        URL_API_LOCAL: process.env.URL_API_LOCAL,
    },
});