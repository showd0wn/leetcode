// topics = ["数组"]

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  const res = [intervals[0]];

  for (let i = 1, n = intervals.length; i < n; i += 1) {
    const currInterval = intervals[i];
    const lastInterval = res[res.length - 1];

    if (currInterval[0] > lastInterval[1]) {
      res.push(currInterval);
    } else if (currInterval[1] > lastInterval[1]) {
      lastInterval[1] = currInterval[1];
    }
  }

  return res;
}
