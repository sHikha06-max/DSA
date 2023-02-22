var MRUQueue = function(n) {
    this.queue = new Array(n + 1).fill(0);
    for(let i = 0; i < this.queue.length; i++) {
        this.queue[i] = i
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    const val = this.queue.splice(k, 1);
    this.queue.push(val)
    return val;
};
//Time Complexity O(N)