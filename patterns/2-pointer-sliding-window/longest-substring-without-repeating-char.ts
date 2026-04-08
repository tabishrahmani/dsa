// Question: https://leetcode.com/problems/longest-substring-without-repeating-characters/
(() => {
  function brute(s: string): number {
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
      const set = new Set();
      for (let j = i; j < s.length; j++) {
        if (set.has(s[j])) break;

        set.add(s.charAt(j));
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
    return maxLen;
  }

  function optimal(s: string) {
    let l = 0,
      r = 0,
      maxLen = 0;
    const map = new Map();

    while (r < s.length) {
      if (map.has(s[r]) && l <= map.get(s[r])) {
        l = map.get(s[r]) + 1;
      }
      map.set(s[r], r);
      maxLen = Math.max(maxLen, r - l + 1);

      r++;
    }

    return maxLen;
  }

  const s = "pwwkew";
  console.log(brute(s));
  console.log(optimal(s));
})();
