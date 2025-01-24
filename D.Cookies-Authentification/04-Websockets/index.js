const server= require('http').createServer();
const io = require('socket.io')(server);

io.on('connection',(socket)=> {
    console.log('Un utilisateur est connecté');
})


server.listen(3000, ()=> {
    console.log("Le serveur est l'écoute du port 3000");
})

const socket = io('http://localhost:3000');

io.on('connection',(socket) => {
    socket.on('chat message',(message)=> {
        io.emit('chat message', message);
    })
})

socket.on('chat message', (message) => {
    console.log(`Message reçu : ${message}`);
})

socket.emit('chat message','Bonjour tous le monde');
