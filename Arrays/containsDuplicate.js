var containsNearbyDuplicate = function(nums, k) {
    var obj = {};
   for (var i=0; i<nums.length; i++) {   
       if ( Math.abs(i-obj[nums[i]])<=k ) {
           return true ;
       } else {
           obj[nums[i]] = i;
       }
   }
   return false
};