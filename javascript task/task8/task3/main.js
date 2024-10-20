// Define a set of vowels for easy lookup
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(str) {
    // Initialize a counter for the number of vowels
    let count = 0;
  
    // Iterate over each character in the string
    for (let char of str) {
      // If the character is a vowel, increment the counter
      if (vowels.includes(char) === true){
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  console.log(countVowels("Hello World")); // Output: 3
  