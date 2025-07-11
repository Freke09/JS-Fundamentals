let myArg = process.argv;

if(myArg.length <= 2){
    console.log("No argument");
}else if(myArg.length === 3){
    console.log("Argument found");
}else{
    console.log("Arguments found");
}