for(let i =0; i < 5; i++){
    console.log(i);
}

let fruit = ['Fraise', 'Banane', 'Kiwi'];

for (let fruit of fruits){
    console.log(fruit);
}

let person = {
    name : 'Jonathan',
    age: 30,
    city: 'Paris'
}


for (let key in person){
    console.log(`${key} : ${person[key]}`);
}

let j = 0;
while(j < 5){
    console.log(j);
    j++
}

let k =0;
do {
    console.log(k);
    k++;
}while(k <5)