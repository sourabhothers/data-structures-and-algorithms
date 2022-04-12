const findSumWithLoop = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const findSumWithMaths = (num) => (num * (num + 1)) / 2;

console.time("findSumWithLoop");
console.log(findSumWithLoop(999999999));
console.timeEnd("findSumWithLoop");

console.time("findSumWithMaths");
console.log(findSumWithMaths(999999999));
console.timeEnd("findSumWithMaths");
