let myArguments = process.argv;

if(myArguments[2] === undefined){
    console.log("No argument");
}else {

    console.log(myArguments[2]);
}