// const cartoon =[" choota bhem", "doremon","mighty raju"];
//  cartoon[2]="dragonballz"
// console.log(cartoon);

// console.log(Boolean([]))
"use strict"
// function isEmpty(list){
//     if (list .length ===0)  return true;
//         return false;

// }
// let x= isEmpty([]);
// console.log((x));

// x= isEmpty ([1,2,3]);
// console.log(x);
// function isLengthy(string){
//     if (string.length >= 10){
//         return true;

//     }else{
//         return false;
//     }
// }
// function LengthyandA(string){
//     if (string.length >= 5){
//         return true;

//     }else{
//         return false;
//     }
// }

// const x ="apple ,cidar ,vinegar";
// console.log(x.split(","));

// const y ="bonjour, madam";
// console.log(y.reverseArray(","));


// const z="namaste ,valekumsaam";
// console.log(z.reverseArray(","));
function reverseArray(string){
const stringArr =string.split("");
const reverseArr =stringArr.reverse();
return reverseArr.join("");
}
const x =reverseArray("hello");
console.log(x);