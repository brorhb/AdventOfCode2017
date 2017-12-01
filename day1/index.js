/*
For example:

- 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
- 1111 produces 4 because each digit (all 1) matches the next.
- 1234 produces 0 because no digit matches the next.
- 91212129 produces 9 because the only digit that matches the next one is the last    digit, 9.
*/

function solveCapcha (capcha) {
  var number = capcha
  var numbers = []
  var last = 0
  var current = 0
  var result = 0
  for (var i = 0; i < number.length; i++) {
    console.log()
    numbers.push(parseInt(number.charAt(i)))
    current = numbers[i]
    last = numbers[i - 1]
    if (current === last) {
      result += last
    }
  }
  if (current === numbers[0]) {
    result += current
  }
  console.log()
  document.getElementById('output').innerHTML = 'solution: ' + result
  console.log(result)
}
