// let sum = 0;

// for(let i = 1;i < 90;i++){
//     sum = sum + i;
//      if(sum >= 100){
//         break;
//     }
// }
// console.log(sum);

let sum = 0;
let number = 1;

while (true) {
  sum += number;
  number++;

  if (sum >= 100) {
    break;
  }
}

console.log("The sum is:", sum);
console.log("The number is:", number - 1);






