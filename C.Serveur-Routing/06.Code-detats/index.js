const express = require('express');
const app = express();
const PORT = 3001;


app.use((err, req, res,next) => {
    console.error(err.stack)
    res.status(500).send('traitement erreur')
})

app.get('/', (req,res)=> {
    try {
        const result = 10 / 2;
        res.status(200).send(`Resultat: ${result}`);

    }catch(error){
        res.status(500).send('Une erreur est survenue');
    }
})

app.listen(PORT, () => {
    // Cette ligne démarre le serveur en écoutant sur le port spécifié. Lorsque le serveur est prêt à accepter des connexions, la fonction de rappel sera exécutée, et dans cet exemple, elle affiche un message dans la console indiquant que le serveur écoute sur le port spécifié.
    console.log(`Le serveur écoute sur le port ${PORT}`);
  });
  