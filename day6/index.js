var input = `4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5`
var array = input.split(/\s+/).map((num) => parseInt(num))
var arrayHistory = []
var max = 0
var i = 0
var steps = 0
var cycle = 0
function part1 () {
  while (true) {
    arrayHistory.push(array.join(' '))
    max = array.reduce((a, b) => Math.max(a, b))
    i = array.indexOf(max)
    array[i] = 0
    while (max--) {
      i = typeof array[i+1] === 'undefined' ? 0 : i + 1
      array[i]++
    }
    steps++
    if (arrayHistory.indexOf(array.join(' ')) !== -1 ) {
      document.getElementById('output').innerText = arrayHistory.length
      arrayHistory = []
      break
    }
  }
}
