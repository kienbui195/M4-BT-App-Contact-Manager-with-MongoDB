import express from "express";
import path from "path";
import contactRouter from "./src/router/contact.router";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const port = 8000;
const app = express();
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views'));
app.use(bodyParser.json());
const DB_URL = "mongodb://localhost:27017"
mongoose.connect(DB_URL)
    .then(() => {
        console.log(`DB connected`)
    })
    .catch( err => {
        console.log(err.message)
    })
app.use('/', contactRouter);

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})