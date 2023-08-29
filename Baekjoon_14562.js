const fs = require("fs")

const inputs = fs.readFileSync("./input.txt").toString().trim().split("\n")

const C = Number(inputs[0])

for (let tc = 1; tc <= C; tc++) {
  const input = inputs[tc].split(" ")
  const S = Number(input[0])
  const T = Number(input[1])

  console.log(bfs(S, T))
}
let qwe = []

function bfs(s, t) {
  let q = []
  q.push({ s: s, t: t, cnt: 0 })

  while (q.length > 0) {
    let node = q.shift()
    let s = node.s
    let t = node.t
    let cnt = node.cnt

    if (s === t) return cnt

    if (s + s <= t + 3) q.push({ s: s + s, t: t + 3, cnt: cnt + 1 })

    if (s + 1 <= t) q.push({ s: s + 1, t: t, cnt: cnt + 1 })
  }
}

// https://www.acmicpc.net/problem/14562
