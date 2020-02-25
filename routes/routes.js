var burger = require("../models/burgers")
function routes(app){

   app.get("/", function(req,res){
    console.log("homepage")
    burger.selectAll(function(data){
        console.log(data)
        res.render("index", {burgers:data})
    })

   })

   app.post("/api/burger", function(req,res){
       console.log(req.body)
       burger.insertOne(req.body.burger_name, function(data){
           res.json(data)
       })
   })

   app.put("/api/burger/:id", function(req,res){
       var id = req.params.id
       burger.updateOne(id,function(data){
           res.json(data)
       })
   })

 
}
module.exports = routes