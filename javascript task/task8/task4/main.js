function findLongestWord(str) {
    // Split the string into words using space as the delimiter
    const words = str.split(' ');
    
    // Initialize a variable to store the longest word
    let longestWord = '';
  
    // Iterate over each word in the array
    for (let word of words) {
      // If the current word is longer than the longestWord, update longestWord
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  console.log(findLongestWord("I am learning Programming to become a programmer")); // Output: "Programming"
  