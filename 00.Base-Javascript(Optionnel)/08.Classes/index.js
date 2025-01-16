class Personne {
    constructor(nom,age){
        this.nom = nom;
        this.age = age;
    }

    saluer(){
        console.log(` Hello je suis ${this.nom} et j'ai ${this.age} ans`);
    } 

}
const personnage1 = new Personne('Jonathan',25);
const personnage2 = new Personne('Clement', 20);

console.log(personnage1);
console.log(personnage2);