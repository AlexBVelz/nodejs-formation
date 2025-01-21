function faireQuelqueChose(callback){
    setTimeout(function() {
        callback("résultat de l'operation");
    }, 2000)
}


faireQuelqueChose(function(resultat){
    console.log(resultat);
})