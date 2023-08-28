const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().split("\n")

let graph = []

const N = Number(input[0])

for (let i = 1; i <= N; i++) {
  graph[i] = input[i]
}

let visited, max

function dfs(idx, cnt) {
  max = Math.max(max, cnt)
  if (!visited[graph[idx]]) {
    visited[graph[idx]] = true
    dfs(graph[idx], cnt + 1)
  }
  return max
}

let result_cnt = -1
let result_num = -1

for (let i = 1; i <= N; i++) {
  max = -1
  visited = []
  visited[i] = true
  let max_cnt = dfs(i, 1)
  if (result_cnt < max_cnt) {
    result_cnt = max_cnt
    result_num = i
  } else if (result_cnt === max_cnt) {
    result_num = Math.min(result_num, i)
  }
}

console.log(result_num)

// https://www.acmicpc.net/problem/3182
