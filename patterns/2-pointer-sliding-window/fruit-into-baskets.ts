(() => {
  function totalFruitOwn(fruits: number[]): number {
    let ans: number = 0;
    const n = fruits.length;
    for (let i = 0; i < n; i++) {
      let count = 0;
      const set = new Set();
      for (let j = i; j < n; j++) {
        set.add(fruits[j]);
        if (set.size > 2) break;
        count++;
      }
      ans = Math.max(ans, count);
    }

    return ans;
  }

  function totalFruitBetter(fruits: number[]): number {
    const n = fruits.length;
    let l = 0,
      r = 0,
      max = 0,
      map = new Map();

    while (r < n) {
      map.set(fruits[r], (map.get(fruits[r]) ?? 0) + 1);

      while (map.size > 2) {
        const leftValue = map.get(fruits[l]);
        const updatedValue = leftValue - 1;
        if (updatedValue) map.set(fruits[l], updatedValue);
        else map.delete(fruits[l]);
        l++;
      }
      max = Math.max(max, r - l + 1);
      r++;
    }
    return max;
  }

  function totalFruitOptimal(fruits: number[]): number {
    const n = fruits.length;
    let l = 0,
      r = 0,
      max = 0,
      map = new Map();

    while (r < n) {
      map.set(fruits[r], (map.get(fruits[r]) ?? 0) + 1);

      if (map.size > 2) {
        const leftValue = map.get(fruits[l]);
        const updatedValue = leftValue - 1;
        if (updatedValue) map.set(fruits[l], updatedValue);
        else map.delete(fruits[l]);
        l++;
      } else {
        max = Math.max(max, r - l + 1);
      }
      r++;
    }
    return max;
  }
})();
