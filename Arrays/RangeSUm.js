var NumArray = function(nums) {
    this.nums = nums;
};


NumArray.prototype.sumRange = function(left, right) {
    let result = this.nums.slice(left,right + 1)
   return result.reduce((acc,curr) => acc + curr, 0)
};