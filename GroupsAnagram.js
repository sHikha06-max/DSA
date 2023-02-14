var groupAnagrams = function(strs) {
    let obj={}
    
     for(let i=0;i<strs.length;i++){
         let string =strs[i].split("").sort().join("")
         if(obj[string]){
             obj[string].push(strs[i])
         }
         else{
             obj[string]=[strs[i]]
         }
     }
     
     let result=[]
     for(key in obj){
         result.push(obj[key])
     }
     return(result)
 };