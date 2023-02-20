var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
   let result = [];
   let result2 = [];
   let ans = []
    for (const elem of set1 ) {
     if (!set2.has(elem)) {
       result.push(elem);
     }
   }
   for (const elem of set2 ) {
     if (!set1.has(elem)) {
       result2.push(elem);
     }
   }
   ans.push(result,result2);
   // console.log(ans)
   return ans
 };