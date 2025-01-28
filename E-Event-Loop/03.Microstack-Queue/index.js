console.log("Debut");

setTimeout(()=> {
    console.log("Fonction asynchrone 1 terminée");
}, 0);


Promise.resolve().then(() => {
    console.log("Fonction asynchrone 2 terminée");
})
console.log("Fin");