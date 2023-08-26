const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const a = input[0]
const b = input[1]

const result = a.indexOf(b) >= 0 ? true : false // 문자열 포함여부 체크
console.log(result ? "go" : "no")

// https://www.acmicpc.net/problem/4999
