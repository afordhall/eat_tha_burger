var connection = require("./connection")

var orm = {
    selectAll:function(tableName, modelCallback){
        console.log("orm")
            connection.query("select * from ??", tableName, function(err, data){
                modelCallback(data)
            })
    },
    insertOne:function(tableName, columnNames, values, modelCallback) {
        connection.query("insert into ?? (??,??) values(?,?) ", [tableName, ...columnNames, ...values], function(err, data){
            modelCallback(data)
        })
    }, 
    updateOne:function(tableName,columnNames,values, modelCallback){
        connection.query("update ?? set ?? = ?  where ?? = ?", [tableName,columnNames[0], values[0],columnNames[1], values[1]], function(err, data){
            modelCallback(data)
        })
    }
}

module.exports = orm