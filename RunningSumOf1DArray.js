var runningSum = function(nums) {
    var result = [];
    var sum = 0;
    for(let i = 0;i<nums.length;i++){
       sum += nums[i];
       result.push(sum);
    }
    
    return result
};