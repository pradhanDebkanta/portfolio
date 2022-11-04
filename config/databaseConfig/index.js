const LocalDB = {
    url: process.env.LOCAL_DATABASE_URL
};

const DevDB = {
    url: process.env.DEV_DATABASE_URL
};

const ProdDB = {
    url: process.env.PROD_DATABASE_URL
};

const TestDB = {
    url: process.env.TEST_DATABASE_URL
};


const dbUrl = () => {
    switch (process.env.NODE_ENV) {
        case 'local':
            return LocalDB;
        case 'development':
            return DevDB;
        case 'production':
            return ProdDB;
        case 'test':
            return TestDB;
        default:
            return;
    }
};

export default dbUrl();