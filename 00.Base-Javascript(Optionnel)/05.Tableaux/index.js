const fruits = ['Pomme', 'Banane', 'Orange'];

fruits[1] = 'Clementines';


fruits.push('Raisin');
fruits.unshift('Peche');
fruits.pop();
fruits.shift(); // Efface la première valeur 
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.length);