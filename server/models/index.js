import mongoose from 'mongoose';
import dbUrl from '../../config/databaseConfig';
import ipModel from './ipSchema';

mongoose.connect(dbUrl.url).then((res) => {
    console.log('Database connected....')
}).catch(e => {
    console.log('Database connection fail.', e.message);
});

const Models = {
    IpModel: ipModel,
};

export default Models;