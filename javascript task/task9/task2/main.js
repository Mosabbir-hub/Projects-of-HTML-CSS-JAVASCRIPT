const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num.length < min.length){
            min = num;
        }
    }
    return min;
}
const min = getMin(heights2);
console.log('max value is:',min);