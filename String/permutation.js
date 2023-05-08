var permute = function(nums) {
    let arr1=[]
   
  const Permutation =(num,arr=[])=>{
           if(num.length==0){
               arr1.push(arr)
               return;
           }
      for(let i=0;i<num.length;i++){
          let arr2=[...num]
          arr2.splice(i,1)   
          Permutation(arr2,[...arr,num[i]])
      }
  }
  Permutation(nums)
  return arr1
};