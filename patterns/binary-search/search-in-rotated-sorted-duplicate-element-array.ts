(() => {
  function search(nums: number[], target: number): boolean {
    const n = nums.length;
    let l = 0,
      h = n - 1;

    while (h >= l) {
      const mid = Math.floor((h + l) / 2);
      if (nums[mid] === target) return true;
      if (nums[mid] === nums[l] && nums[mid] === nums[h]) {
        l++;
        h--;
      } else if (nums[mid] <= nums[h]) {
        if (target >= nums[mid] && target <= nums[h]) {
          l = mid + 1;
        } else {
          h = mid - 1;
        }
      } else {
        if (target >= nums[l] && target <= nums[mid]) {
          h = mid - 1;
        } else {
          l = mid + 1;
        }
      }
    }

    return false;
  }
})();
