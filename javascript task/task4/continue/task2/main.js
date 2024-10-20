// for (let i = 55; i <= 85; i++) {
//     // Check if the number is odd and not divisible by 5
//     if (i % 2 !== 0 && i % 5 !== 0) {
//       console.log(i);
//     }
// }

for (let i = 55; i <= 85; i++) {
    // Skip numbers divisible by 5
    if (i % 5 === 0) {
        continue;
      }
    // Check if the number is odd
    if (i % 2 !== 0) {
      console.log(i);
    }  
}
