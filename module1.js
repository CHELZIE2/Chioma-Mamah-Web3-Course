// Looping a triangle
let character = "#"
for(N = 1 ; N < 8 ; N++){
  let result = character.repeat(N)
  console.log(result)
}

// FizzBuzz
let numberz = 1
while(numberz <= 100){
  if(numberz % 3 == 0 && numberz % 5 == 0){
    console.log("FizzBuzz")
  }else if(numberz % 3 == 0){
    console.log("Fizz")
  }else if(numberz % 5 == 0){
    console.log("Buzz")
  }else{
    console.log(numberz)
  }
  numberz ++
}

// ChessBoard
let board = "";  // Start with an empty string
let size = 8;    // Define the size of the checkerboard

for (let row = 0; row < size; row++) {      // Outer loop for rows
  for (let col = 0; col < size; col++) {    // Inner loop for columns
    if ((row + col) % 2 === 0) {
      board += "#";  // Add "#" if row + col is even
    } else {
      board += " ";  // Add space if row + col is odd
    }
  }
board += "\n";  // After each row, add a newline character
}

console.log(board);

// Minimum Function
  function min(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return 'they are equal';
  }
}

console.log(min(0, 10))
console.log(min(0, -10))
console.log(min(93, 93))

// Recursion
function isEven(n) {
  // Handle negative numbers by converting them to positive
  if (n < 0) {
    return isEven(-n);
  }
  // Base cases
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  // Recursive case
  else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));



// Bean Counting
function countBs(str) {
  return countChar(str, 'B'); 
}
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
