const crypto = require('crypto')

const dataToHash = "Hello world";

function hashDataAsync(data,callback){
    crypto.pbkdf2(dataToHash,'',100000,64,'sha256',  (err,derivedKey) => {
        if(err){
            callback(err);
        }else {
            callback(null,derivedKey.toString('hex'));
        }
    })
}


hashDataAsync(dataToHash,(err,hashedData)=> {
    if(err){
        console.log('Erreur lors du hashage')
    }else {
        console.log(hashedData);
    }
});