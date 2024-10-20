function isEvenOdd(number){
    if(number % 2 === 0){
        const result = number * 2;
        return result;
    }
    if(number % 2 === 1){
        const result = number / 2;
        return result;
    }
}


console.log(isEvenOdd(110));

