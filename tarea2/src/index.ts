import express from 'express';
import {config} from 'dotenv';
import {connect} from 'mongoose';
config();

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

const dbUrl = process.env.DB_URL;
console.log("Mongo URL: " + dbUrl);


connect(dbUrl as string).then( res => {
    console.log('Connected to database');
    app.use(routes);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    
}).catch(err => {
    console.log("Error");
});

