class Solution {
  kDistinctChar(s, k) {
    //your code goes here
    let l = 0,
      r = 0,
      maxLen = 0;
    const n = s.length;
    const map = new Map();
    while (r < n) {
      map.set(s[r], (map.get(s[r]) || 0) + 1);

      if (map.size > k) {
        const value = map.get(s[l]);
        const updatedValue = value - 1;
        if (updatedValue === 0) map.delete(s[l]);
        else map.set(s[l], updatedValue);

        l++;
      } else {
        maxLen = Math.max(maxLen, r - l + 1);
      }

      r++;
    }
    return maxLen;
  }
}
