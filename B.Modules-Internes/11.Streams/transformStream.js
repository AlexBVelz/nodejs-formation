const {Transform} = require('stream');


const uppercaseTransformStream = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUppercase())
        callback()
    }
})

process.stdin.pipe(uppercaseTransformStream).pipe(process.stdout);