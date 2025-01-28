const fs = require('fs')


console.log("Debut");

fs.readFile('exemple.txt', 'utf8', (err,data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})


console.log("Fin");