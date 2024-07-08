const net = require("node:net");

const server = net.createServer((socket)=>{
	socket.end(`${new Date()}\n`);
});

server.listen(59090);
