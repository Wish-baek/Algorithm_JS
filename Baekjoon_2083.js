const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().trim().split("\n")

for (let i = 0; i < input.length - 1; i++) {
  const input_line = input[i].split(" ")
  const name = input_line[0]
  const age = input_line[1]
  const weight = input_line[2]
  console.log(name + (age > 17 || weight >= 80 ? " Senior" : " Junior"))
}

// https://www.acmicpc.net/problem/2083
