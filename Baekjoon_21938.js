const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().split("\n")
const NM = input[0].split(" ")
const N = NM[0]
const M = NM[1]

const dr = [0, 0, -1, 1]
const dc = [-1, 1, 0, 0]

let map = []
for (let i = 0; i < N; i++) {
  map[i] = []
  const line = input[i + 1].split(" ")
  for (let j = 0; j < M; j++) {
    const r = Number(line[j * 3])
    const g = Number(line[j * 3 + 1])
    const b = Number(line[j * 3 + 2])
    const avg = (r + g + b) / 3
    map[i][j] = avg
  }
}

const T = input[Number(N) + 1]

for (let i = 0; i < N; i++) {
  // 새로운 화면 저장
  for (let j = 0; j < M; j++) {
    map[i][j] >= T ? (map[i][j] = 255) : (map[i][j] = 0)
  }
}
let visited = []

for (let i = 0; i < N; i++) {
  visited[i] = []
}

function bfs(sr, sc) {
  let q = []
  q.push({ r: sr, c: sc })
  visited[sr][sc] = true
  while (q.length !== 0) {
    let now = q.shift()

    for (let i = 0; i < 4; i++) {
      let nr = now.r + dr[i]
      let nc = now.c + dc[i]

      if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue
      if (visited[nr][nc] || map[nr][nc] != map[now.r][now.c]) continue
      q.push({ r: nr, c: nc })
      visited[nr][nc] = true
    }
  }
}
let result = 0
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && map[i][j] === 255) {
      bfs(i, j)
      result++
    }
  }
}
console.log(result)

// https://www.acmicpc.net/problem/21938
