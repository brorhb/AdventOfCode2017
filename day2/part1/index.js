var input = `1208	412	743	57	1097	53	71	1029	719	133	258	69	1104	373	367	365
4011	4316	1755	4992	228	240	3333	208	247	3319	4555	717	1483	4608	1387	3542
675	134	106	115	204	437	1035	1142	195	1115	569	140	1133	190	701	1016
4455	2184	5109	221	3794	246	5214	4572	3571	3395	2054	5050	216	878	237	3880
4185	5959	292	2293	118	5603	2167	5436	3079	167	243	256	5382	207	5258	4234
94	402	126	1293	801	1604	1481	1292	1428	1051	345	1510	1417	684	133	119
120	1921	115	3188	82	334	366	3467	103	863	3060	2123	3429	1974	557	3090
53	446	994	71	872	898	89	982	957	789	1040	100	133	82	84	791
2297	733	575	2896	1470	169	2925	1901	195	2757	1627	1216	148	3037	392	221
1343	483	67	1655	57	71	1562	447	58	1561	889	1741	1338	88	1363	560
2387	3991	3394	6300	2281	6976	234	204	6244	854	1564	210	195	7007	3773	3623
1523	77	1236	1277	112	171	70	1198	86	1664	1767	75	315	143	1450	1610
168	2683	1480	200	1666	1999	3418	2177	156	430	2959	3264	2989	136	110	3526
8702	6973	203	4401	8135	7752	1704	8890	182	9315	255	229	6539	647	6431	6178
2290	157	2759	3771	4112	2063	153	3538	3740	130	3474	1013	180	2164	170	189
525	1263	146	954	188	232	1019	918	268	172	1196	1091	1128	234	650	420`

var input2 = `5 9 2 8
9 4 7 3
3 8 6 5`

var array = []
var rows = []
var sum = 0
var even = 0
var diff
var num = 0
var highnum = 0

function calculate () {
  array = input.split(/\t|\n|''/)
  for (var i = 0; i < array.length; i++) {
    sum += Math.max(...array[i]) - Math.min(...array[i])
  }
  console.log(sum)
}

function calculate2 () {
  array = input.split(/\n/)
  for (var row = 0; row < array.length; row++) {
    rows = array[row].split(' ')
    rows = rows.map(row => row.split('\t').map(Number).sort((x, y) => x - y))
    diff = parseInt(rows[0][rows[0].length - 1]) - parseInt(rows[0][0])
    sum += diff
  }
  console.log(sum)
}

function moduloFun () {
  array = input.split(/\n/)
  for (var row = 0; row < array.length; row++) {
    highnum = 0
    rows = array[row].split(' ')
    rows = rows.map(row => row.split('\t').map(Number).sort((x, y) => y - x))
    for (var i = 0; i < rows[0].length; i++) {
      num = parseInt(rows[0][i])
      for (var o = 0; o < rows[0][o]; o++) {
        if (num !== rows[0][o] && (num % rows[0][o] === 0 || rows[0][o] % num === 0)) {
          if (highnum === 0) {
            highnum = num
            console.log('highnum', highnum)
          } else {
            even = highnum / num
            console.log('even', even)
          }
        }
      }
    }
    sum += even
    console.log('sum', sum)
  }
}

// Hint
/*const input = document.body.textContent.trim().split('\n');
const rows = input.map(r => r.split('\t').map(Number).sort((x, y) => x - y));
const diff = r => r[r.length - 1] - r[0];
const quot = r => (([x, y]) => y / x)(r.filter(x => r.some(evenDiv(x))));
const evenDiv = x => y => x !== y && (y % x === 0 || x % y === 0);

console.log([diff, quot].map(f => rows.reduce((sum, r) => sum + f(r), 0)));*/
