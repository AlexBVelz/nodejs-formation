const data = require('./data.json')

data.produits.forEach(produits => {
    console.log(`ID : ${produits.id}, Nom: ${produits.nom}, Prix : ${produits.prix}, Stock : ${produits.stock}`);
})