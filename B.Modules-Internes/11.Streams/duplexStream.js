const {Duplex} = require('stream');

const myDuplexStream = new Duplex({
    write(chunk,encoding,callback){
        console.log(`Données reçues:${chunk.toString()}`);
        callback()
    },
    read(){

    }
})

myDuplexStream.write('La minute du code');
myDuplexStream.end();

myDuplexStream.on('data', (chunk) => {
    console.log(`Data: ${chunk.toString()}`);
})

myDuplexStream.on('end', (chunk) => {
    console.log(`Data: ${chunk.toString()}`);
})