const zmq = require('zeromq')
const subscriber = zmq.socket('rep');
const {createPoint} = require('../helpers/helpers')

// subscriber.on("message", function(reply) {
//     console.log('Received message: ', reply.toString());
// })

subscriber.connect("tcp://localhost:9000");
// subscriber.subscribe("");
console.log("Subscriber running...")
subscriber.on("message", (message)=>{
    console.log("Message hit")
    const point = createPoint();
    console.log("Got the message: ", message.toString());
    subscriber.send(JSON.stringify(point))
});


process.on('SIGINT', function() {
    subscriber.close()
    console.log('\nClosed')
})