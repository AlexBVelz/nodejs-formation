class Animal {
    constructor(nom){
        this.nom = nom;
    }

    saluer(){
        console.log(`Je suis un animal nommé ${this.nom}`);
    }
}

class Chien extends Animal {
    aboyer(){
        console.log('Wof woof');
    }
}

const monChien = new Chien('Rex');
monChien.saluer();
monChien.aboyer();
console.log(monChien);