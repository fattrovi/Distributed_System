// @吳尚恩
const aedes = require("aedes")();
const server = require("net").createServer(aedes.handle);
const port = 8887;

// create server
server.listen(port, (err, res) => {
	if (err) {
		console.error(err);
	}
	console.log("server started and listening on port ", port);
});

// client on connect
aedes.on("client", (client) => {
	console.log("New client connect: ", client.id);
});

// client on ready
aedes.on("clientReady", (client) => {
	console.log(client.id, " is ready");
});

//client on subscribe
aedes.on("subscribe", (subscriptions, client) => {
	console.log(client.id, " subscribe on ", subscriptions[0].topic);
});

// handle publish
aedes.on("publish", (packet, client) => {
	// const topic = packet.topic;
	// try {
	// 	const msg = JSON.parse(packet.payload.toString());
	// } catch (err) {
	// 	console.log(err);
	// }
});
// msg published should be a JSON object:
// {
//     "from": "clientId",
//     "msg" : "msg content...",
//     "timestamp" : "UTC 1234"
// }