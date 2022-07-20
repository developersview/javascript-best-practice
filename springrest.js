import http from "http";

http
    .get("http://localhost:8080/api/v1/employees", (resp) => {
        let data = "";

        // A chunk of data has been recieved. Append it with the previously retrieved chunk of data

        resp.on("data", (chunk) => {
            data += chunk;
        });
        // when the whole response is received, parse the result and Print it in the console

        resp.on("end", () => {
            console.log(JSON.parse(data));
        });
    })
    .on("error", (err) => {
        console.log("Error: " + err.message);
    });