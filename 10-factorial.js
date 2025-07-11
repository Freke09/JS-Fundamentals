// Write a script that computes and prints a factorial
/*
The first argument is integer (argument can be cast as integer) used for computing the factorial
Factorial of NaN is 1
You must do it recursively
You must use a function
You must use console.log(...) to print all output
You are not allowed to use var
*/

// Step 1: Collect the input from the command line
let myArgument = process.argv;

// step 2: convert the input to a number if possible
let myNumber = Number(myArgument[2]);

// step 3: write the factorial fuction
function factorial(n){
    if((n === 0 || n === 1) || (n < 0 || isNaN(n))){
        return 1
    }else {
        return n * factorial(n - 1);
    }
}

// step 4: call the factorial fuction and log the result to the console
console.log(factorial(myNumber));