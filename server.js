const http = require("http");
const PORT = 4000;
const fs = require("fs");

// Creating the server
const server = http.createServer((req, res) => {
  res.write("Server is Created");
  res.end();
});

// listen - is for the connection
server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running in PORT:${PORT}`);
  }
});

//Launch the html file using HTTP
const servers = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) {
      console.log("error");
      res.writeHead(404, "A page is not Found");
    } else {
      res.write(data);
    }
  });
});

servers.listen(PORT, (err) => {
  if (err) {
    console.log(`Error is the ${PORT}`);
  } else {
    console.log("Server is Running");
  }
});
