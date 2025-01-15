// Importez le module Express
const express = require('express');

// Créez une instance de l'application Express
const app = express();

// Définissez une route pour la page d'accueil
app.get('/', (req, res) => {
  // définit une route HTTP pour la méthode GET. Lorsque quelqu'un accède à la racine de votre site (dans ce cas, la route '/'), la fonction de rappel (callback) spécifiée sera exécutée. La fonction prend deux paramètres, req (requête) et res (réponse), qui représentent respectivement la requête entrante et la réponse que vous renverrez au client.
  res.send('Bienvenue sur votre serveur Express !');
  // Cette ligne envoie la chaîne de caractères "Bienvenue sur le serveur" comme réponse à la requête. Cela signifie que si quelqu'un accède à la racine de votre site, il recevra cette chaîne de caractères comme réponse.
});

// Écoutez le serveur sur le port 3000
const port = 3000;
// Cette ligne spécifie le port sur lequel le serveur écoutera les requêtes. Dans cet exemple, le serveur écoutera sur le port 3000. Vous pouvez changer ce numéro de port en fonction de vos besoins.
app.listen(port, () => {
  // Cette ligne démarre le serveur en écoutant sur le port spécifié. Lorsque le serveur est prêt à accepter des connexions, la fonction de rappel sera exécutée, et dans cet exemple, elle affiche un message dans la console indiquant que le serveur écoute sur le port spécifié.
  console.log(`Le serveur écoute sur le port ${port}`);
});
