const express = require ("express");


const app = express();
const PORT = process.env.PORT || 8080; 


app.use(express.urlencoded({exended: true }));
app.use(express.json());

app.use(express.static("app/publc"));