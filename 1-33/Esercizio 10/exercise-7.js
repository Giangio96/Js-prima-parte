function sumUntil(maxValue) {
  let resultSum = 0
  for (let i = 1; i <= maxValue; i++) {
    resultSum += i
  }
  return resultSum
}

console.log(sumUntil(5));