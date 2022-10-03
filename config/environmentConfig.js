const local = {
    apiEndPoint: process.env.NEXT_PUBLIC_API_ENDPOINT_LOCAL
};

const dev = {
    apiEndPoint: process.env.NEXT_PUBLIC_API_ENDPOINT_DEV,
};

const prod = {
    apiEndPoint: process.env.NEXT_PUBLIC_API_ENDPOINT_PROD
}

const test = {
    apiEndPoint: process.env.NEXT_PUBLIC_API_ENDPOINT_TEST
}

const env = () => {
    switch (process.env.NODE_ENV) {
        case 'local':
            return local;
        case 'development':
            return dev;
        case 'production':
            return prod;
        case 'test':
            return test;
        default:
            return;
    }
};

export default env();