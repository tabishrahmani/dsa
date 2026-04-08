(function () {
  function brute(nums: number[], k: number): number {
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = i; j < nums.length; j++) {
        if (nums[j] === 0) count++;

        if (count > k) break;

        maxLen = Math.max(maxLen, j - i + 1);
      }
    }

    return maxLen;
  }

  function better(nums: number[], k: number) {
    let l = 0,
      r = 0,
      maxLen = 0,
      count = 0;
    const n = nums.length;

    while (r < n) {
      if (nums[r] === 0) count++;

      while (count > k) {
        if (nums[l] === 0) count--;
        l++;
      }

      maxLen = Math.max(maxLen, r - l + 1);
      r++;
    }
    return maxLen;
  }

  function optimal(nums: number[], k: number): number {
    let l = 0,
      r = 0,
      maxLen = 0,
      count = 0;
    const n = nums.length;

    while (r < n) {
      if (nums[r] === 0) count++;

      if (count > k) {
        if (nums[l] === 0) count--;
        l++;
      } else {
        maxLen = Math.max(maxLen, r - l + 1);
      }
      r++;
    }
    return maxLen;
  }

  const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
  const k = 3;

  console.log(brute(nums, k));
  console.log(better(nums, k));
  console.log(optimal(nums, k));
})();
