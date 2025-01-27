const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Nouvelle connexion');
    socket.on('set pseudo', (pseudo) => {
        socket.pseudo = pseudo;
        console.log('pseudo:', pseudo);
    });
    socket.on('chat message', (message) => {
        console.log('message:', message);
        io.emit('Message reçu = ' + message);
        const pseudo = socket.pseudo;
        io.emit('chat message', pseudo + ': ' + message);
    })
    socket.on('deconnexion', () => {
        console.log('Utilisateur  déconnecté');
    });
});

const PORT = process.env.PORT || 3000;



server.listen(PORT, () => {
    console.log(`Le serveur est à l'écoute sur le port ${PORT}`);
})