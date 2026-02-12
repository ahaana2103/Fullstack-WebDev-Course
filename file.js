//import function name from path
// import {add} from "./utils.js" ;
// const output= add(1, 2);
// console.log("Adding (1, 2) :" , output);

// import { sub } from "./functions/function.js";
// console.log("Subtracting(2, 1) :",  sub(2, 1));

// import fs, { readFile } from "fs";
// console.log("Start --");
// fs.readFile("file.txt", "utf8" ,(err, output) => {
//     if(err) {
//         console.log( "err --",err);
//     }
//     console.log("Output ---" ,output);
// });

// console.log("Ended ---");

const count =  require("./counter");
console.log("Count:", count)