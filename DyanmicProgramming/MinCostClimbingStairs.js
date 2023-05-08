/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
  let prev1 = cost[1];
  let prev2 = cost[0];
  for (let i = 2; i < n; i++) {
    const curr = cost[i] + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = curr;
  }
  return Math.min(prev1, prev2);
};
//Time Complexity O(N)
//Space Complexity O(1)