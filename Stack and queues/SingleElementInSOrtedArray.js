var singleNonDuplicate = function(nums) {
    let lo = 0;
       let hi = nums.length - 1;
       while (lo < hi) {
           let mid = lo + (hi - lo) / 2;
           let halvesAreEven = (hi - mid) % 2 == 0;
           if (nums[mid + 1] == nums[mid]) {
               if (halvesAreEven) {
                   lo = mid + 2;
               } else {
                   hi = mid - 1;
               }
           } else if (nums[mid - 1] == nums[mid]) {
               if (halvesAreEven) {
                   hi = mid - 2;
               } else {
                   lo = mid + 1;
               }
           } else {
               return nums[mid];
           }
       }
       return nums[lo];
   

};
//Time complexity O(log n)