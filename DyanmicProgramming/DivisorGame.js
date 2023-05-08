/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    const dp = new Array(n+1).fill(false);
  dp[1] = false; // Alice loses when n=1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && !dp[i-j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};

//Time complexity O(n^2)
//Space complexity O(n)