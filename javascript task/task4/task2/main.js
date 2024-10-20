let num1 = 61;
while(num1 <= 100){
    num1++;
    if(num1 % 2 !== 0){
        // console.log('odd number:',num1);
    }
}
let num2 = 78;
while(num2 <= 98){
    num2++;
    if(num2 % 2 === 0){
        // console.log('even number:',num2);
    }
}
//even
// for(let i = 61;i <= 100;i = i+2){
//     console.log('odd number:',i);
// }
//odd
// for(let i = 78;i <= 98;i = i+2){
//     console.log('even number:',i);
// }

for(let num1 = 61;num1 <= 100; num1++){
    if(num1 % 2 !== 0){
        console.log('odd number:',num1);
    }
}
for(let num2 = 78;num2 <= 98; num2++){
    if(num2 % 2 === 0){
        console.log('even number:',num2);
    }
}