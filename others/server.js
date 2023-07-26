//require modules
import express from "express";
import mssql from "mssql";

const app = express();

//get request
app.get("/", function(req, res) {
    // Config your database credential
    const config = {
        user: "sa",
        password: "12345",
        server: "localhost",
        database: "Practice_Database",
        options: {
            encrypt: false,
            trustServerCertificate: true, // change to true for local dev / self-signed certs
        },
    };
    //connect to mssql database
    mssql.connect(config, function(err) {
        if (err) console.log(err);
        // Create Request object to perform
        var request = new mssql.Request();
        // query to the database and get the records
        request.query("SELECT * FROM Customers;", function(err, recordset) {
            if (err) console.log(err);

            // send records as a response
            res.send(recordset);
            console.log(recordset);
        });
    });
});

var server = app.listen(5000, function() {
    console.log("server listening to post 5000....");
});