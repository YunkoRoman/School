import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConfig} from "./database";
import {config} from './config'


dotenv.config();
dbConfig.authenticate().then(() => console.log("connect to DB"))
    .catch((err) => {
        throw err;
    });

const app = express();

app.use(cors());
app.options('*', cors());


app.listen(config.PORT, () => {
    console.log(`Listening port ${config.PORT}`)
});