var connection = require("./connection")

var orm = {
    selectAll:function(tableName, modelCallback){
        console.log("orm")
            connection.query("select * from ??", tableName, function(err, data){
                modelCallback(data)
            })
    }
}

module.exports = orm