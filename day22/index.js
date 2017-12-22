let input = `..######.###...######...#
.##..##.#....#..##.#....#
.##.#....###..##.###.#.#.
#.#.###.#####.###.##.##.#
.###.#.#.###.####..##.###
..####.##..#.#.#####...##
....##.###..#.#..#...####
.#.##.##.#..##...##.###..
.######..#..#.#####....##
###.##.###.########...###
.#.#.#..#.##.#..###...#..
.#.##.#.####.#.#.....###.
##..###.###..##...#.##.##
##.#.##..#...##...#...###
##..#..###.#..##.#.#.#.#.
.##.#####..##....#.#.#..#
..#.######.##...#..#.##..
#.##...#.#....###.#.##.#.
.#..#.#.#..#.####..#.####
.##...##....##..#.#.###..
..##.#.#.##..##.#.#....#.
###.###.######.#.########
..#.####.#.#.##..####...#
#.##..#.#.####...#..#..##
###.###.#..##..#.###....#`

/*input = `..#
#..
...`*/

let directions = {
  'up': [-1, 0],
  'down': [1, 0],
  'left': [0, -1],
  'right': [0, 1]
}
let dir = 'up'
let pos = [0, 0]
let infected = {}
let burstCausedInfection = 0
var arr = input.split(/\n/).map((row) => row.split(''))
var offset_y = Math.floor(arr.length / 2)
var offset_x = Math.floor(arr[0].length / 2)
arr.forEach((row, y) => row.forEach((col, x) => {
  if (col === '#') {
    infected[`${y - offset_y},${x - offset_x}`] = 'i'
  }
}))
let loops = 10000

function move (d) {
  if (d === 'left') {
    if (dir === 'up') dir = 'left'
    else if (dir === 'left') dir = 'down'
    else if (dir === 'down') dir = 'right'
    else if (dir === 'right') dir = 'up'
  } 
  else if (d === 'right') {
    if (dir === 'up') dir = 'right'
    else if (dir === 'right') dir = 'down'
    else if (dir === 'down') dir = 'left'
    else if (dir === 'left') dir = 'up'
  }
  else if (d === 'reverse') {
    if (dir === 'up') dir = 'down'
    else if (dir === 'down') dir = 'up'
    else if (dir === 'left') dir = 'right'
    else if (dir === 'right') dir = 'left'
  }
}

function part1 () {
  loops = 10000
  while (loops--) {
    let _pos = `${pos[0]},${pos[1]}`
    if (infected[_pos] === 'i') {
      infected[_pos] = false
      move('right')
    } else {
      infected[_pos] = 'i'
      burstCausedInfection++
      move('left')
    }
    pos[0] += directions[dir][0]
    pos[1] += directions[dir][1]
  }
  console.log('part 1:', burstCausedInfection + ' bursts have caused an infection')
}

function part2 () {
  loops = 10000000
  while (loops--) {
    let _pos = `${pos[0]},${pos[1]}`
    if (infected[_pos] === 'i') {
      infected[_pos] = 'f'
      move('right')
    } else if (infected[_pos] === 'w') {
      infected[_pos] = 'i'
      burstCausedInfection++
    } else if (infected[_pos] === 'f') {
      infected[_pos] = false
      move('reverse')
    } else {
      infected[_pos] = 'w'
      move('left')
    }
    pos[0] += directions[dir][0]
    pos[1] += directions[dir][1]
  }
  console.log('part 2:', burstCausedInfection + ' bursts have caused an infection')
}

part1()
part2()
