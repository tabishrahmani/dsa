(() => {
  function characterReplacement(s: string, k: number): number {
    let maxLen = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
      let maxFreq = 0,
        map = new Map();
      for (let j = i; j < n; j++) {
        map.set(s[j], (map.get(s[j]) ?? 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(s[j]));
        const changes = j - i + 1 - maxFreq;
        if (changes <= k) {
          maxLen = Math.max(maxLen, j - i + 1);
        } else {
          break;
        }
      }
    }

    return maxLen;
  }

  function characterReplacementOptimal(s: string, k: number): number {
    let maxLen = 0,
      l = 0,
      r = 0,
      maxFreq = 0;
    const n = s.length;
    const map = new Map();
    while (r < n) {
      map.set(s[r], (map.get(s[r]) ?? 0) + 1);
      maxFreq = Math.max(maxFreq, map.get(s[r]));
      const changes = r - l + 1 - maxFreq;

      if (changes <= k) {
        maxLen = Math.max(maxLen, r - l + 1);
      } else {
        const value = map.get(s[l]);
        const updatedValue = value - 1;
        if (updatedValue === 0) map.delete(s[l]);
        else map.set(s[l], updatedValue);
        l++;
      }
      r++;
    }

    return maxLen;
  }

  const s = "ABBB";
  const k = 2;

  console.log(characterReplacement(s, k));
})();
