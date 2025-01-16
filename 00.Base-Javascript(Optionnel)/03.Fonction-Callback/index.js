function faireQuelqueChose(callback){
    console.log('Hello');
    callback()
}

function add(){
    console.log('Hello depuis callback');
}

faireQuelqueChose(add);