var burger = require("../models/burgers")
function routes(app){

   app.get("/", function(req,res){
    console.log("homepage")
    burger.selectAll(function(data){
        console.log(data)
        res.render("index", {burgers:data})
    })

   })

 
}
module.exports = routes