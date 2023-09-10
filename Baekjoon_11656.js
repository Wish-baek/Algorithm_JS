const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().trim()
const S = input + ""

let list = []
const len = S.length

for (let i = 0; i < len; i++) {
  const str = S.substring(i, len)
  list.push(str)
}

list.sort()
list.forEach((str) => console.log(str))

// https://www.acmicpc.net/problem/11656
