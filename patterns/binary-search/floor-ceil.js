class Solution {
  /**
   * The largest number in arr that is less than or equal to k
   */
  floor(arr, k, n) {
    let l = 0,
      h = n - 1,
      floor = -1;
    while (h >= l) {
      const mid = Math.floor((l + h) / 2);
      if (arr[mid] <= k) {
        floor = arr[mid];
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
    return floor;
  }

  /**
   * The smallest number in arr that is greater than or equal to k
   * @returns
   */
  ceil(arr, k, n) {
    let l = 0,
      h = n - 1,
      ceil = -1;
    while (h >= l) {
      const mid = Math.floor((l + h) / 2);
      if (arr[mid] >= k) {
        ceil = arr[mid];
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return ceil;
  }
  findFloorCeil(arr, k) {
    // write your solution here
    const n = arr.length;
    const floorCeil = [this.floor(arr, k, n), this.ceil(arr, k, n)];
    return floorCeil;
  }
}

// const arr = [1, 3, 5, 7, 9, 11];
// const target = 6;

// const arr = [2, 4, 6, 8, 10];
// const target = 10;

const arr = [5, 10, 15, 20];
const target = 3;

const sol = new Solution();
const floorCeil = sol.findFloorCeil(arr, target);
console.log(floorCeil);
