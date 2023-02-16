
var search = function(nums, target) {
     let left = 0, right = nums.length-1;
    while(left < right){
      const mid = left + Math.floor((right - left)/2)
      if(nums[mid]===target) return mid
    
      if (nums[mid] < nums[right]) {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } 
     
        else {
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    }
if(nums[left]==target) return left;
else return -1;
};