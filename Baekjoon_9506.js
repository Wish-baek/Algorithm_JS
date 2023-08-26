const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().trim().split("\n")

const len = input.length

for (let i = 0; i < len - 1; i++) {
  // 마지막 문자(-1) 제외하고 반복
  let result = ""
  let sum = 0
  const num = Number(input[i])

  for (let j = 1; j < num; j++) {
    if (num % j === 0) {
      // 약수라면
      result += j + " + "
      sum += j
    }
  }

  result = result.substring(0, result.length - 2) // 마지막에 필요없는 문자(+) 지워줌
  result = num + " = " + result
  sum === num ? console.log(result) : console.log(num + " is NOT perfect.") // 약수들의 합과 같다면 / 아니라면
}

// https://www.acmicpc.net/problem/9506
