let myArgument =  process.argv;

let loopNumber = Number(myArgument[2]);

if(isNaN(loopNumber)){
    console.log("Missing number of occurrences")
}else {
    for (let i = 1; i <= loopNumber; i++){
        console.log("C is fun");
    }
}