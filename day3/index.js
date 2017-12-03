var sum = 0
var input = 312051
var input2 = 1024
// var square = 312481
var square = 0
var fib = []
var number = 27

function math () {
  square = Math.round(Math.sqrt(input))
  square *= square
  sum = input - square
  document.getElementById('output').innerText = sum
}

function fibonacci () {
  fib[0] = 1
  fib[1] = 1
  for (var i = 2; i <= 21; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
    console.log(fib[i])
    if (fib[i] > input) {
      sum = fib[i]
      document.getElementById('output').innerText = sum
      break
    }
  }
  console.log(fib[fib.length - 1])
}

/*
wrong numbers
317811
correct number
https://oeis.org/A141481
312453
*/
