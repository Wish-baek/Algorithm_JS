const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().trim().split("\n")
const len = Number(input[0])

const numberArr = []
const multiRecord = {}
const sumRecord = {}

for (let i = 0; i < len; i++) {
  const line = input[i + 1].split(" ")
  const b = line[0]
  const p = line[1]
  const q = line[2]
  const r = line[3]

  numberArr[i] = b
  multiRecord[b] = p * q * r
  sumRecord[b] = Number(p) + Number(q) + Number(r)
}

numberArr.sort((a, b) => {
  if (multiRecord[a] === multiRecord[b]) {
    if (sumRecord[a] === sumRecord[b]) return a - b
    return sumRecord[a] - sumRecord[b]
  }
  return multiRecord[a] - multiRecord[b]
})

let result = ""

for (let i = 0; i < 3; i++) {
  result += numberArr[i] + " "
}

console.log(result)

//https://www.acmicpc.net/problem/23246
