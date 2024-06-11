const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const record = {}
const arr = input[1].split(" ")
for (let i = 0; i < arr.length; i++) {
  record[arr[i]] = 0
}

for (let i = 2; i < input.length; i++) {
  const arr = input[i].split(" ")
  for (let j = 0; j < arr.length; j++) {
    record[arr[j]]++
  }
}

for (key of Object.keys(record).sort((a, b) => {
  if (record[a] === record[b]) return record[a] - record[b]
  return record[b] - record[a]
})) {
  console.log(key + " " + record[key])
}

//https://www.acmicpc.net/problem/25325
