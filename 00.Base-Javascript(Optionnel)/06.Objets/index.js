let person = {
    name: 'Alexandre',
    age: 28,
    city: 'Dunkerque'
}

person.age = 35;
person['city'] = 'Londres';
person.codePostale= 75000;
person['job'] = 'Webdesigner';

console.log(person.name);
console.log(person['age']);

for (let key in person){
    console.log(`${key} : ${person[key]}`)
}