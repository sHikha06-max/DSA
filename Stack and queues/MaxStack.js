var MaxStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return Math.max(...this.stack)
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    let max = Math.max(...this.stack)
    return this.stack.splice(this.stack.lastIndexOf(max),1)
};