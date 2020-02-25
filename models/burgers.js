const orm = require("../config/orm");

const burger = {
    selectAll:  function(routesCallback){
        console.log("model")
        orm.selectAll("burgers", function(data){
            routesCallback(data)
        })
    },

    insertOne: function(burger_name, routesCallback) {
        orm.insertOne("burgers", ["burger_name", "devoured"] ,[burger_name,false], function(data){
            routesCallback(data)
        })
    },

    updateOne: function(id, routesCallback) {
        orm.updateOne("burgers",["devoured","id"],[true,id], function(data){
            routesCallback(data)
        })
    }

    
}

module.exports = burger