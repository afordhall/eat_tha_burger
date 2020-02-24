const express = require ("express");


const app = express();
const PORT = process.env.PORT || 8080; 
const expressHandlebars = require("express-handlebars")

app.use(express.urlencoded({exended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}))
app.set("view engine", "handlebars")



app.use(express.static("public"));


const routes = require("./routes/routes")
routes(app)

app.listen(PORT, function(){
    console.log("app is listening http://localhost:"+ PORT)
})