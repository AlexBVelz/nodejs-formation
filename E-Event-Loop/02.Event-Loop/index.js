function AsyncOperation(callback){
    setTimeout(() => {
        console.log("Operation asynchrone terminée");
        callback();
    },2000)
}


function callbackFunction(){
    console.log("Callback executé");
}


console.log("Debut de l'exécution")
AsyncOperation(callbackFunction);
console.log("Fin de l'exécution")