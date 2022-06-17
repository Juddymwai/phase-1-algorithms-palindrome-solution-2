function isPalindrome(word) {
  // Write your algorithm here
  let lowerCaseWord = word.toLowerCase()
  let reversedWord = word.split('').reverse().join('')
  return  lowerCaseWord === reversedWord
  
  
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome('mom'))
console.log(isPalindrome('run'))

/* 
  Add your pseudocode here
*/
// convert the input string to lower case
// also the input string should be reversed
// compare the two variable
// return the result of the comparison

/*
  Add written explanation of your solution here
  inside the function isPalindrome,the first step is to define the varable that will be assigned to the lower case input
  the second step will be to define the second variavle that hold the reversed input.
  afterwards the function is going to return the result of comparing the two variable using strict equality assignment.
  the function will return true is the condition is met and false if the condition is not met
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
