const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().trim().split(" ")
const A = input[0]
const B = input[1]
const N = input[2]

let result = A % B

for (let i = 0; i < N - 1; i++) {
  result *= 10
  result %= B
}

result *= 10

console.log(Math.floor(result / B))

//https://www.acmicpc.net/problem/1312
