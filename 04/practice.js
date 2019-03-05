let scores = [22, 33, 49, 87, 82, 38, 18, 49, 87, 49, 73, 18, 56, 62]

let i = 0
let highScore = 0
while (i < scores.length) {
  if (scores[i] > highScore) {
    highScore - scores[i]
  }
}

let msg = `Лошадь №${i + 1} пришла с результатом ${scores[i]}`
console.log(msg)
i += 1

console.log(highScore)

let j = 0
let bestScores = []
while (j < scores.length) {
  if (scores[i] === highScore) {
    bestScores.push(scores[j])
  }
  j += 1
}
console.log(bestScores);
