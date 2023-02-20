var removeDuplicates = function(nums) {
    let result=0;
     for(let i=0;i<nums.length;i++){
         if(nums[i]!=nums[result]){
              ++result;
             nums[result]=nums[i];
            
         }
     }
     return result+1;
 };
 