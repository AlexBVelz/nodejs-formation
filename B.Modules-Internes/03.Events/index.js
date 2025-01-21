const EventEmitter = require('events');

const monEmitter = new EventEmitter();

//monEmitter.on('eventNom', () => {
//    console.log('Un évenement du nom de eventNom a été émis');
//})

function handler(){
    console.log('Ceci ne sera pas émis');
}

monEmitter.on('eventNom',handler);
monEmitter.removeListener('eventNom',handler); // Permet de supprimer l'événement

monEmitter.once('eventNom', () => {
    console.log('Cette événement sera émis une seule fois');
}) 

// Permet d'éméettre un événement
monEmitter.emit('eventNom');