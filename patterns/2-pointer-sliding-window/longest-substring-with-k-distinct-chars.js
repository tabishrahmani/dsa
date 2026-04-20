/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
  longestKSubstr(s, k) {
    // code here
    let l = 0,
      r = 0,
      n = s.length,
      maxLen = 0;
    const map = new Map();
    while (r < n) {
      map.set(s[r], (map.get(s[r]) ?? 0) + 1);

      while (map.size > k) {
        const value = map.get(s[l]);
        const updatedValue = value - 1;
        if (updatedValue === 0) map.delete(s[l]);
        else map.set(s[l], updatedValue);

        l++;
      }

      maxLen = Math.max(maxLen, r - l + 1);
      r++;
    }

    return map.size === k ? maxLen : -1;
  }
}

const s = "aabacbebebe";
const k = 3;
const sol = new Solution();
console.log(sol.longestKSubstr(s, k));
