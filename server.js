const http = require("http");
const PORT = 3000;

const mockdata = [
  { id: 1, name: "Swarna" },
  { id: 2, name: "Gowri" },
];

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(mockdata));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(PORT, () => console.log("Server is running"));
