var simplifyPath = function(path) {
    let stack = [];
    result = path.split('/');
   
    for (let i=0;i<result.length;i++) {
        if (result[i]=='.' || result[i]=='') continue;
        if (result[i]=='..') stack.pop();
        else stack.push(result[i]);
    }
  
    return '/'+stack.join('/');
}