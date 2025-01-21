const fsPromises = require('fs').promises;

fsPromises.readFile('monFichier.txt', 'utf-8')
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.error(err)
})

async function lireFichier(){
    try{
        const data = await fsPromises.readFile('monFichier.txt','utf-8');
        console.log(data);
    }catch(err){
        console.error(err)
    }
}

lireFichier();