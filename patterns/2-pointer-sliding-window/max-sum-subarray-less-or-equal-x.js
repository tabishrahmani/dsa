// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} sum
 * @return {number}
 */

class Solution {
  brute(arr, x) {
    // code here
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum <= x) {
          maxSum = Math.max(sum, maxSum);
        }
      }
    }
    return maxSum;
  }

  better(arr, x) {
    let l = 0;
    let r = 0;
    let sum = 0;
    let maxSum = 0;

    while (r < arr.length) {
      sum += arr[r];

      while (sum > x) {
        sum -= arr[l];
        l++;
      }

      if (sum <= x) {
        maxSum = Math.max(sum, maxSum);
      }
      r++;
    }
    return maxSum;
  }
}

const arr = [16, 52, 39, 80, 34, 38];
const sum = 152;

const sol = new Solution();
console.log(sol.brute(arr, sum));
console.log(sol.better(arr, sum));
