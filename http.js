import http from "http";

let students = [
    {id: 1, name: 'Vikash Tomar', age: 18, phone: 1234512345},
    {id: 2, name: 'Rajat', age: 25, phone: 1234512346}
];

const server = http.createServer((req, res) => {
    if(req.method === "GET"){
        // console.log("Hello World")
        res.end("Hello World")
    }
})

server.listen(4000,() => {console.log("Server has started at port 4000")})
