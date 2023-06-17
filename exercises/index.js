// let str = 'hello world'

// let str2 = str.charAt(0).toUpperCase() + str.slice(1)

// console.log(str2);
// function noOdds (){}

// let str = "a"

// for(let i = str; i <=6; i++){
//   console.log(i);
// }
// ==================
// let str = "assalomu aleykum";

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   //  if(str[i].replace([a,o,u,e])) {count =count + 1}
//   if (
//     str[i].includes("a") ||
//     str[i].includes("e") ||
//     str[i].includes("o") ||
//     str[i].includes("u")
//   ) {
//     count = count + 1;
//   }
// }
// console.log(count);====================

let nums = [0,1,2,3]
for(let i = 0; i < nums.length; i++){
  // if(i % 2 == 0) console.log(`juft son ${i}`);
  i % 2 == 0 ? console.log(`juft son ${i}`) : console.log(`toq son ${i}`);
}
