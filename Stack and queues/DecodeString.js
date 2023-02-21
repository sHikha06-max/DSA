var decodeString = function(s) {
    let stack = [];
   for (let ele of s) {
     if (ele !== "]") { stack.push(ele); continue; }
     let curr = stack.pop();
     let str = '';
     while (curr !== '[') {
       str = curr + str;
       curr = stack.pop();
     }
     let num = '';
     curr = stack.pop();
     while (!Number.isNaN(Number(curr))) {
       num = curr + num;
       curr = stack.pop();
     }
     stack.push(curr);
     stack.push(str.repeat(Number(num)));
   }
   return stack.join(''); 
 };