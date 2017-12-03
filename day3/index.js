var sum = 0
var input = 312051
var input2 = 1024
// var square = 312481
var square = 0

function math () {
  square = Math.round(Math.sqrt(input))
  square *= square
  sum = input - square
  document.getElementById('output').innerText = sum
}
