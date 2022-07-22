const zmq = require('zeromq')
const subscriber = zmq.socket('rep');
const {createPoint, artificialDelayFromSendingListToApi} = require('../helpers/helpers')

// subscriber.on("message", function(reply) {
//     console.log('Received message: ', reply.toString());
// })

subscriber.connect("tcp://localhost:9000");
// subscriber.subscribe("");
console.log("Subscriber running...")
subscriber.on("message", async (message)=>{
    console.log("Message received in recipient")
    const listGotToApi = await artificialDelayFromSendingListToApi(2);
    if(listGotToApi){
        subscriber.send(JSON.stringify({listRan: true}))
    }
});


process.on('SIGINT', function() {
    subscriber.close()
    console.log('\nClosed')
})