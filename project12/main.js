//Problem 01:
function calculateTax(income, expenses) {
    if(income >= expenses && income >= 0 && expenses >= 0){
        const diff = income - expenses;
        const tax = diff * .20;
        return tax;  
    }
    else{
        return "Invalid Input";
    }
}
const tax = calculateTax(7000, 7000);
// console.log(tax);

//Problem 02:
function sendNotification(email) {
  if (email.includes('@')) {
    const [username, domain] = email.split('@');
    return `${username} sent you an email from ${domain}`;
  } else {
    return "Invalid Email";
  }
}

// Example usage
// console.log(sendNotification("mosa45@email.com"));
// console.log(sendNotification("invalidemail.com"));


//problem 03:
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
      return  "Invalid Input";
    }
    
    const hasNumber = /\d/.test(name);
    return hasNumber;
  }

// console.log(checkDigitsInName("!@#")); 
// console.log(checkDigitsInName("Hello"));
// console.log(checkDigitsInName(["Raj"])); 


// problem 04: 
function calculateFinalScore(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return "Invalid Input";
  }

  const stringValue = obj.value1;
  const value2 = obj.value2; 
  const value3 = obj.value3;
  const booleanValue = obj.value4; 

  if (typeof value2 !== 'number' || value2 > 50 || typeof value3 !== 'number' || value3 > 30) {
    return "Invalid Input";
  }

  let total = value2 + value3;
  total += booleanValue === true ? 20 : 0;

  return total > 80;
}


const input1 = { value1: "mosa", value2: 50, value3: 30, value4: true };
// console.log(calculateFinalScore(input1)); 

const input2 = { value1: "mosa", value2: 20, value3: 30, value4: false };
// console.log(calculateFinalScore(input2)); 

const input3 = 90879879887;
// console.log(calculateFinalScore(input3));


// problem 05:

function waitingTime(waitingTimes  , serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
    return "Invalid Input";
  }

  const numbers = waitingTimes.filter(num => typeof num === 'number');
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;
  const roundedAverage = Math.round(average); 
  
  if(serialNumber > numbers.length){
    const serialRemain = serialNumber -1;
    const noSerialNo = serialRemain - numbers.length;
    const isratTimeNeed = noSerialNo * roundedAverage;
    return isratTimeNeed;
  }

}

// Example usage:
const numbers = [ 3, 5, 7, 11, 6 ];
// console.log(waitingTime(numbers, 10));

const mixedArray = [13, 'a', 2, true];
// console.log(waitingTime(mixedArray,6));

const invalidInput = [7, 8, 3, 4, 5];
// console.log(waitingTime(invalidInput  , "9"));







  

