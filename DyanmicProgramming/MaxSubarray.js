var maxSubArray = function(nums) {

    const dp = new Array(nums.length);
    dp[0] = nums[0];
    let maxSum = dp[0];
  
    for (let i = 1; i < nums.length; i++) {
      dp[i] = Math.max(nums[i], nums[i] + dp[i-1]);
      maxSum = Math.max(maxSum, dp[i]);
    }
  
    return maxSum;
};
//Time Complexity O(n)
//Space complexity O(n)