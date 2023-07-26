import express from "express";
//to use this we have to remove "type":"module" from package.json
//const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!😊");
});

app.listen(port, () => {
    console.log("App listening to port : " + port);
});