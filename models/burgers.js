const orm = require("../config/orm");

const burger = {
    selectAll:  function(routesCallback){
        console.log("model")
        orm.selectAll("burgers", function(data){
            routesCallback(data)
        })
    }

    
}

module.exports = burger