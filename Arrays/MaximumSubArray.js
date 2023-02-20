var maxSubArray = function(nums) {

    var max = nums[0];
      var   curr = 0;
 
     for (var i = 0; i < nums.length; i++) {
         if (curr < 0) {
             curr = 0}
         curr += nums[i]
         max = Math.max(max, curr)
     }
     
     return max 
     
 
 
 
     
 };