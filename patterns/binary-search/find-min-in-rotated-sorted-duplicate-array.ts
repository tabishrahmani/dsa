(function () {
  function findMin(nums: number[]): number {
    const n = nums.length;
    let l = 0,
      h = n - 1;

    while (h >= l) {
      const mid = Math.floor((h + l) / 2);

      if (nums[mid] < nums[h]) {
        h = mid;
      } else if (nums[mid] > nums[h]) {
        l = mid + 1;
      } else {
        h--;
      }
    }
    return nums[l];
  }
})();
