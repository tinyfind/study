const net = require("net");
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(data.toString());
    socket.write("你连上了tcp")
  });
});

server.listen(5000)