var lengthOfLongestSubstring = function(s) {
    if(s.length == 1) return 1;
  
   let i = 0;
   let j = 0;
   let res = 0;

  const set = new Set();
   while(i<s.length){
       if(!set.has(s[i])){
           set.add(s[i]);
           i++;
           res = Math.max(res,set.size);
       }
       else{
           set.delete[s[j]];
           j++;
           
       }
   }
   return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"))