const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const NM = input[0].split(" ");
const N = NM[0];
const M = NM[1];

const scores = [];
const scoreArr = input[1].split(" ");
for (let i = 0; i < N; i++) {
  scores[i] = Number(scoreArr[i]);
}
const students = {};

for (let i = 2; i < input.length; i++) {
  const info = input[i].split(" ");
  students[info[0]] = 0;
  for (let j = 1; j <= N; j++) {
    students[info[0]] += info[j] === "O" ? scores[j - 1] : 0;
  }
}

const sortStudents = Object.keys(students).sort((a, b) => {
  if (students[a] === students[b]) return a - b;
  return students[b]-students[a]
});

console.log(sortStudents[[0]]+" "+students[sortStudents[[0]]])

//https://www.acmicpc.net/problem/15702
