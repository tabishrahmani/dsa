/**
 * Question means lower bound itself
 */
(function () {
  function searchInsert(nums: number[], target: number): number {
    const n = nums.length;
    let l = 0,
      h = n - 1,
      ans = n;
    while (h >= l) {
      const mid = Math.floor((l + h) / 2);
      if (nums[mid] >= target) {
        ans = mid;
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    return ans;
  }
})();
