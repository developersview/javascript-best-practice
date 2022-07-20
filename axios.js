//const axios = require('axios');
import axios from "axios";

/* axios
    .get("http://localhost:8080/api/v1/employees")
    .then((res) => {
        //console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    }); */
axios
    .post("http://localhost:8080/api/v1/employee", {
        firstName: "Thor",
        lastName: "Odinson",
        emailID: "thorodinson@gmail.com",
    })
    .then((res) => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });