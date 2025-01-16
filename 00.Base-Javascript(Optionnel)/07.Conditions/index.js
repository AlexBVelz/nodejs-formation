let nb = 10;

if(nb > 0 || nb == 2){
    console.log('Le nombre est positif');
}else if (nb < 0){
    console.log('Le nombre est négatif');
}else {
    console.log('Le nombre est 0');
}

let jean = 'blue';

switch(jean){
    case 'blue':
        console.log('10€');
        break;
    case 'orange':
        console.log('20€')
        break;
    default:
        console.log('Nous avons pas de couleur');
}