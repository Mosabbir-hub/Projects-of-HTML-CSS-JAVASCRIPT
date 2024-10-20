//odd
let sum1 = 0;
for(let num1 = 91;num1 <= 129; num1++){
    if(num1 % 2 !== 0){
        // console.log('odd number:',num1);
        sum1 = sum1 + num1;
    }
}
console.log('sum of all the odd numbers from 91 to 129',sum1);
//even
let sum2 = 0;
for(let num2 = 51;num2 <= 85; num2++){
    if(num2 % 2 === 0){
        // console.log('even number:',num2);
        sum2 = sum2 + num2;
    }
}
console.log('sum of all the even numbers from 51 to 85',sum2);



