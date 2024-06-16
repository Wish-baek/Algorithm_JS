const fs = require("fs")
let input = fs.readFileSync("./input.txt").toString().trim().split("\n")
let group = 0

while (input.length !== 0) {
  const len = Number(input[0])
  input.shift()
  if (len === 0) return
  console.log(`Group ${group + 1}`)

  const arr = []
  for (let i = 0; i < len; i++) {
    arr[i] = []
    arr[i] = input[0].split(" ")
    input.shift()
  }
  let nasty = 0
  for (let i = 0; i < len; i++) {
    const target = arr[i][0]
    for (let j = 1; j < len; j++) {
      if (arr[i][j] === "N") {
        nasty++
        const childrenIdx = i - j < 0 ? i - j + len : i - j
        const children = arr[childrenIdx][0]
        console.log(`${children} was nasty about ${target}`)
      }
    }
  }

  if (nasty === 0) console.log("Nobody was nasty")
  group++
  console.log(" ")
}

//https://www.acmicpc.net/problem/1384
