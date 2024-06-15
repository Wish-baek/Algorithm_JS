const fs = require("fs")
const [A, B] = fs.readFileSync("./input.txt").toString().trim().split(" ")

let min = B.length

for (let i = 0; i <= B.length - A.length; i++) {
  let diff = 0
  for (let j = 0; j < A.length; j++) {
    if (A[j] !== B[i + j]) {
      diff++
    }
  }
  min = Math.min(min, diff)
}

console.log(min)

//https://www.acmicpc.net/problem/1120
