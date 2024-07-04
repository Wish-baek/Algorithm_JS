const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const T = +input.shift()

for (let tc = 0; tc < T; tc++) {
  const N = Number(input.shift())
  const note1 = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
  const M = Number(input.shift())
  const note2 = input.shift().split(" ").map(Number)
  let answer = []
  for (let i = 0; i < M; i++) {
    const target = note2[i]
    let left = 0
    let right = N
    let isPossible = false
    let mid

    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (note1[mid] == target) {
        isPossible = true
        break
      } else if (note1[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    const res = isPossible ? 1 : 0
    answer.push(res)
  }
  console.log(answer.join("\n"))
}
