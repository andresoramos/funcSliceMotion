const zmq = require('zeromq');
const {createPoint} = require('../helpers/helpers')

var publisher = zmq.socket('pub');

publisher.bind('tcp://*:8688', function(err) {
    if(err)
        console.log(err)
    else
        console.log("Listening on 8688...")
})

setInterval(()=>{
    console.log('sent');
    const point = createPoint();
    const payloadInfo = point;
    publisher.send(JSON.stringify(payloadInfo))
}, 1000)


process.on('SIGINT', function() {
    publisher.close()
    console.log('\nClosed')
})