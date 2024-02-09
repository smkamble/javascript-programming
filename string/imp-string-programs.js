const str = "Dhaikj123akska54haj*&78";
// find chars and digits
const strLength = str.length;
const chars = [];
const digits = [];
for (let i = 0; i < strLength; i++) {
    const char = str.charAt(i);
    //if(char.match((/[a-zA-Z]/g)) {  //Output: Dhaikjakskahaj
    if (char.match(/[^0-9]/g)) {
        chars.push(char);
    } else if (/[0-9]/g) {
        digits.push(char);
    }
}
console.log(chars.join(""), digits.join("")) //Output: "Dhaikjakskahaj*&",  "1235478"
//==========================================================================================

// find sum of sequence numbers

const allNumbers = str.split(/[^0-9]/g);
let sum = 0;
allNumbers.forEach(ele => {
    sum += Number(ele);
})
console.log(sum) //Output: 255
//==========================================================================================

// find each char count

const charCount = {};
for (const char of str) {
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1
    }
}
console.log(charCount);

Output:
{
  "1": 1,
  "2": 1,
  "3": 1,
  "4": 1,
  "5": 1,
  "7": 1,
  "8": 1,
  "D": 1,
  "h": 2,
  "a": 4,
  "i": 1,
  "k": 3,
  "j": 2,
  "s": 1,
  "*": 1,
  "&": 1
} 
//==========================================================================================

// Reverse a string
const a = "letcode";
let reverseStr = "";
for (let i = 0; i < a.length; i++) {
    const x = a.charAt(i);
    reverseStr = x + reverseStr;
}
console.log(reverseStr);  //Output: edoctel

