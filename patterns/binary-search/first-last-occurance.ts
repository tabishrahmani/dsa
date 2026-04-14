function firstPosition(nums: number[], target: number, n: number): number {
  let l = 0,
    h = n - 1,
    ans = -1;
  while (h >= l) {
    const mid = Math.floor((h + l) / 2);
    if (nums[mid] >= target) {
      h = mid - 1;
      if (nums[mid] === target) {
        ans = mid;
      }
    } else {
      l = mid + 1;
    }
  }
  return ans;
}
function lastPosition(nums: number[], target: number, n: number): number {
  let l = 0,
    h = n - 1,
    ans = -1;
  while (h >= l) {
    const mid = Math.floor((h + l) / 2);
    if (nums[mid] <= target) {
      l = mid + 1;
      if (nums[mid] === target) {
        ans = mid;
      }
    } else {
      h = mid - 1;
    }
  }
  return ans;
}
function searchRange(nums: number[], target: number): number[] {
  const n = nums.length;
  return [firstPosition(nums, target, n), lastPosition(nums, target, n)];
}
