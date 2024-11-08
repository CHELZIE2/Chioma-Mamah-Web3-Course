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
