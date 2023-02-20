var diStringMatch = function(s) {
    var N = s.length;
       var I = 0, D = N;
       var ans = [];
       for (let i = 0; i < N; i++) {
           if (s[i] == 'I'){
               ans.push(I);
               I++;
           }
           else{
               ans.push(D);
               D--;
           }
       }

      if(s[N-1] == "I"){
          ans.push(D)
      } else{
          ans.push(I)
      }
       return ans;
   
};

//Time Complexity - O(N);