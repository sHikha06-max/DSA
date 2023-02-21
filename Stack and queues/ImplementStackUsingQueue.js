class MyQueue {
    constructor() { 
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }
    
    
    enqueue(element) {
        this.data[this.rear] = element;
        this.rear++;
    }
    
    isEmpty() {
        return this.front == this.rear;
    }
    
    print() {
        for(let i = this.front; i < this.rear; ++i)
            console.log(this.data[i]);
    }
    
    dequeue() {
        if(this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        let frontElement = this.data[this.front];
        this.front++;
        return frontElement;
    }
    
    length() {
        return this.rear - this.front;    
    }
    
    
    getFront() {
        if(this.isEmpty()) {
            throw new Error("Queue is Empty!");
        }
        return this.data[this.front];
    }
}

var MyStack = function() {
    this.q1 = new MyQueue();
    this.q2 = new MyQueue();
    this.length = 0; 
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.enqueue(x);
    this.length++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    
    for(let i = 0; i < this.length - 1; ++i)
        this.q2.enqueue(this.q1.dequeue());

    
    let poppedElement = this.q1.dequeue();

   
    while(!this.q2.isEmpty())
        this.q1.enqueue(this.q2.dequeue());

   
    this.length--;

    return poppedElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
 
    for(let i = 0; i < this.length - 1; ++i)
        this.q2.enqueue(this.q1.dequeue());

   
    let topElement = this.q1.dequeue();

   
    while(!this.q2.isEmpty())
        this.q1.enqueue(this.q2.dequeue());

   
    this.q1.enqueue(topElement);

    return topElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.length == 0;
};

//time complexity O(N)