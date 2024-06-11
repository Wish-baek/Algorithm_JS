const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().trim().split("\n")

for (let i = 0; i < input.length - 1; i++) {
  const input_line = input[i].split("\n")
  console.log(input_line)
}

// https://www.acmicpc.net/problem/2083
