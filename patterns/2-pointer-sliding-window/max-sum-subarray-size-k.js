/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
  maxSubarraySum(arr, k) {
    // code here
    let maxSum = 0;
    let l = 0;
    let r = k - 1;

    for (let i = l; i <= r; i++) {
      maxSum += arr[i];
    }

    let sum = maxSum;

    while (r < arr.length - 1) {
      sum -= arr[l];
      l++;
      r++;
      sum += arr[r];

      maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
  }
}

const sol = new Solution();

const arr = [100, 200, 300, 400];
const k = 1;

console.log(sol.maxSubarraySum(arr, k));
