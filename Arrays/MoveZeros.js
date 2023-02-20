var moveZeroes = function(nums) {
    let zero = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]!=0){
        [nums[zero],nums[i]] = [nums[i],nums[zero]]
        zero++;}
    }
    return nums
};