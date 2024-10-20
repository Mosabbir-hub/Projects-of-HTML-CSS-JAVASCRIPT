for (let i = 1; i <= 100; i++) {
    // Check if the square root of the number is an integer
    if (Math.sqrt(i) % 1 === 0) {
      console.log("First square number encountered:", i);
      break;
    }
  }  