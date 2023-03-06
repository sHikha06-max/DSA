var removeElements = function(head, val) {
    const sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel,curr = head;
    
    while(curr !== null) {
        if(curr.val === val) { 
            prev.next = curr.next;         
        }
        else {
            prev=curr;
        }
        curr = curr.next;
    }
    
    return sentinel.next;  
};

//Time complexity O(N)
// Space complexity O(1)