var validateStackSequences = function(pushed, popped) {
    let stack = [];
    var j = 0;
    for(let i of pushed){
        stack.push(i)
        while (stack.length > 0 && stack[stack.length - 1] === popped[j]){
            stack.pop();
            j++;
        }
    } return j == pushed.length
};

//Time complexity O(n)