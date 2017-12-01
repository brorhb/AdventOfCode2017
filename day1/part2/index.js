/*
For example:

- 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
- 1111 produces 4 because each digit (all 1) matches the next.
- 1234 produces 0 because no digit matches the next.
- 91212129 produces 9 because the only digit that matches the next one is the last    digit, 9.
*/

function solveCapcha () {
  var number = document.getElementById('input').value
  var numbers = []
  var current = 0
  var result = 0
  for (var i = 0; i < number.length; i++) {
    numbers.push(parseInt(number.charAt(i)))
  }
  for (var y = 0; y < numbers.length; y++) {
    current = numbers[y]
    var check = y + (number.length / 2)
    if (check > (number.length - 1)) {
      check = check - number.length
    }
    console.log('current', current)
    console.log('check', numbers[check])
    if (current === numbers[check]) {
      result += current
    }
  }
  console.log(numbers)
  document.getElementById('output').innerHTML = 'solution: ' + result
}
