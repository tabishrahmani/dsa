// Question - https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

(() => {
  function maxScore(cardPoints: number[], k: number): number {
    let lSum = 0;
    for (let i = 0; i < k; i++) {
      lSum += cardPoints[i];
    }

    let sum = lSum;
    let rSum = 0;
    let l = k - 1;
    let r = cardPoints.length - 1;

    while (l >= 0) {
      lSum -= cardPoints[l];
      l--;

      rSum += cardPoints[r];
      r--;

      sum = Math.max(sum, lSum + rSum);
    }
    return sum;
  }
  const cardPoints = [1, 2, 3, 4, 5, 6, 1];
  const k = 3;

  console.log(maxScore(cardPoints, k));
})();
