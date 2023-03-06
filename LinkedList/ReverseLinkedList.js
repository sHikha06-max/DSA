var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    
    
    
    var prev = head;
    var cur = head.next;
      
    prev.next = null;
    while (cur !== null) {
        var next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    return prev;

   
};

//Time complexity O(N)