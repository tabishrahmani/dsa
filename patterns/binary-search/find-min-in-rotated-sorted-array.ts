(function () {
  function findMin(nums: number[]): number {
    const n = nums.length;
    let l = 0,
      h = n - 1,
      ans = Infinity;

    while (h >= l) {
      const mid = Math.floor((h + l) / 2);

      if (nums[l] <= nums[h]) {
        ans = Math.min(ans, nums[l]);
        break;
      }

      if (nums[mid] >= nums[l]) {
        ans = Math.min(ans, nums[l]);
        l = mid + 1;
      } else {
        ans = Math.min(ans, nums[mid]);
        h = mid - 1;
      }
    }
    return ans;
  }
  const arr = [4, 5, 6, 7, 0, 1, 2];

  console.log(findMin(arr));
})();
