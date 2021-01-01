import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";


const app = express();
dotenv.config();


const port = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());


app.listen(port, () => {
    console.log(`Listening port ${port}`)
});