function isPalindrome(word) {
  // Write your algorithm here
  for ( let input=0; input< word.length /2; input++){
    const o = word.length -1 - input;
    if (word[input] !== word[o]) {
      
      return false;
      
  }
  return true;
  
}
}


/* 
  Add your pseudocode here
*/
 // To iterate from the beginning of the string to the middle of the string
//  compare the letters that are being ilitereted
//  if the letters are matching return true
//  if the letters are not matching return false

/*
  Add written explanation of your solution here
  inside the function isPalindrome,i will interate the input string staring from begining to the middle of the string. 
  i will then define another variable and use it to compare the letters am iterating to the corresponding letter at the end of the string
  the functions should return true id the comparison is met and false if the condition was not met

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
