var isValid = function(s) {
    var S = s.split("");
         var stack=[];
     var check=0;
     for(var j = 0;j<S.length;j++){
          if(S[j]=='{'|| S[j]=='('|| S[j]=='['){
       
       stack.push(s[j]);
       }
       else{
       
           if(S[j]=='}' && stack[stack.length-1]=='{' || S[j]==']' && stack[stack.length-1]=='[' || s[j]==')' && stack[stack.length-1]=='('){
           stack.pop(); 
           }
     
         else{
          check=1;
          break;
         }
     
       }
  
     }
    if(check==1){
   return false;   
      
    }
    
    else if( stack.length==0){
   return true;
    }
    
    else{
    return false;
    }  
};

//Time Complexity O(N)