var minCost = function(n, cuts) {
    cuts.sort((a, b) => a - b);
  cuts.unshift(0);
  cuts.push(n);
  const m = cuts.length;
  const dp = Array.from({length: m}, () => Array(m).fill(0));

  for (let i = m-2; i >= 0; i--) {
    for (let j = i+2; j < m; j++) {
      dp[i][j] = Infinity;
      for (let k = i+1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + cuts[j] - cuts[i]);
      }
    }
  }

  return dp[0][m-1]; 
};
//Time complexity O(n^3)
//Space complexity O(n^2)