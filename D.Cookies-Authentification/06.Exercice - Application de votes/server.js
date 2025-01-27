const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const PORT = 4000;

app.use(express.static('public'));

io.on('connection',(socket) => {
    console.log('Utilisateur connecté');
    socket.on('vote',(option) => {
        console.log(`Un utilisateur a voté pour ${option}`);
        io.emit('Modification de vote',option);
    })  
    socket.on('Déconnexion',() => {
        console.log('Utilisateur déconnecté');
    })
})

server.listen(PORT, () => {
    console.log(`Le serveur est à l'écoute sur le port ${PORT}`);
})