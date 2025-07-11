let myArgument = process.argv;

// convert the command line argument[2] to a number if it is not
let num = Number(myArgument[2]);
if(isNaN(num)){
    console.log("Not a number");
}else {
    console.log("My number: " + num);
}