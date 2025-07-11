let myArgument = process.argv;

let mySquareSize = Number(myArgument[2]);

if(isNaN(mySquareSize)){
    console.log("Missing size");
}else {
    for (let i = 1; i <= mySquareSize; i++){
        let row = "";
        for (let j = 1; j <= mySquareSize; j++){
            row += "X";
        }
        console.log(row);
    }
}