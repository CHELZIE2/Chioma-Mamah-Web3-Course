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
