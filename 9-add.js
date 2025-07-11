let myArgument = process.argv;

let num1 = Number(myArgument[2]);
let num2 = Number(myArgument[3]);

function add(a, b){
    console.log(a + b);
}

if(isNaN(num1)){
    console.log("NaN");
}else if(isNaN(num2)){
    console.log("NaN");
}else {
    add(num1, num2);
}