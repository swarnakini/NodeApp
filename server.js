const { json } = require("express");
const http = require("http");
const PORT = 3000;

//Create Server
const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "not found" }));
  }
});

//Start Server
server.listen(PORT, () => {
  console.log("Running");
});
