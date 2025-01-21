const fs = require('fs');

fs.readFile('monFichier.txt','utf-8',(err,data) => {
    if(err) {
        console.error(`Error lors de la lecture ${err}`);
        return;
    }
    console.log(`Contenu: ${data}`);
})

fs.writeFile('nouveauFichier.txt','contenu a ajouter', err => {
    if(err) {
        console.error(`Error lors de l'écriture ${err}`);
        return;
    }
    console.log("Ecriture réussi");
})

fs.unlink('supprimer.txt', (err) => {
    if(err) {
        console.error(`Error lors de la supression ${err}`);
        return;
    }
    console.log("Suppression réussi");
})

fs.rename('ancienNom.txt', 'NouveauNom.txt', (err) => {
    if(err) {
        console.error(`Error lors de la modification ${err}`);
        return;
    }
    console.log("Fichier renommé avec succès");
})

fs.mkdir('nouveauDossier', (err)=> {
    if(err) {
        console.error(`Error lors de la création du dossier ${err}`);
        return;
    }
    console.log("Dossierr créée");
})

fs.readdir('.', (err,fichier) => {
    if(err) {
        console.error(`Error lors de la supression ${err}`);
        return;
    }
    console.log(`Contenu  ${fichier}`);
})