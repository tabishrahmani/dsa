(() => {
  function numberOfSubstringsOwn(s: string): number {
    let count = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
      const set = new Set();
      for (let j = i; j < n; j++) {
        set.add(s[j]);

        if (set.size === 3) count++;
      }
    }
    return count;
  }

  function numberOfSubstringsV2(s: string): number {
    let count = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
      const set = new Set();
      for (let j = i; j < n; j++) {
        set.add(s[j]);

        if (set.size === 3) {
          count += n - j;
          break;
        }
      }
    }
    return count;
  }

  function numberOfSubstrings(s: string): number {
    let count = 0,
      r = 0;
    const n = s.length;
    const map = new Map();

    while (r < n) {
      map.set(s[r], r);
      if (map.size === 3) {
        count += Math.min(...Array.from(map.values())) + 1;
      }
      r++;
    }
    return count;
  }

  function numberOfSubstringsOptimalV3(s: string): number {
    let count = 0,
      r = 0;
    const n = s.length;
    const map = [-1, -1, -1];

    while (r < n) {
      map[s[r].charCodeAt(0) - "a".charCodeAt(0)] = r;
      count += Math.min(map[0], map[1], map[2]) + 1;
      r++;
    }
    return count;
  }
})();
