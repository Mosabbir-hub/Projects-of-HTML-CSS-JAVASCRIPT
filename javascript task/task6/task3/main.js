var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = '';

// Use a for...of loop to iterate over the array
for (const name of numbers) {
    // console.log(name);
    result += name;

}

console.log(result); // Output: 'TomTimTinTik'
