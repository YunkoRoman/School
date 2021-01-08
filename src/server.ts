import express from "express";
import bodyParser from 'body-parser'
import cors from "cors";
import dotenv from "dotenv";
import {dbConfig} from "./database";
import {config} from './config'

import {teacherRouter} from './router'

dotenv.config();
dbConfig.authenticate().then(() => console.log("connect to DB"))
    .catch((err) => {
        throw err;
    });

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.get('', (req, res) => {
    res.json('Hello')
})
app.use('/teacher', teacherRouter);

app.listen(config.PORT, () => {
    console.log(`Listening port ${config.PORT}`)
});