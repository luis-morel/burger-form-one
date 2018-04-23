// Importing SQL connection settings
var sqlCxn = require('../config/connection.js');

// ORM object containing SQL query functions as keys
var orm = {

    selectAll: function (tableName, callBack) {

        var queryString = "SELECT * FROM " + tableName;

        console.log("\n >> orm.selectAll() queryString: ", queryString);

        // Retrieve all records SQL query (SELECT * FROM ??)
        sqlCxn.query(queryString, function (error, data) {

            if (error) throw error;
            callBack(data);

        });

    },

    insertOne: function (tableName, tableData, callBack) {

        var queryString = "INSERT INTO " + tableName + " SET ?";

        console.log("\n >> orm.insertOne() queryString: ", queryString);

        // Add new record SQL query (INSERT INTO ?? SET ??)
        sqlCxn.query(queryString, tableData, function (error, result) {

            if (error) throw error;
            callBack(result);

        });

    },

    updateOne: function (tableName, condition, callBack) {

        var queryString = "UPDATE " + tableName + " SET ? WHERE ?";

        console.log("\n >> orm.updateOne() queryString: ", queryString);

        // Update record SQL query (UPDATE burgers SET ?? WHERE ?)
        sqlCxn.query(queryString, [{ devoured: 1}, condition], function (error, result) {

            if (error) throw error;
            callBack(result);

        });

    }

}

// Exporting orm object for model (burger.js)
module.exports = orm;