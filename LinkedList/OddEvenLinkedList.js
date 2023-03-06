var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    let oddNode = head;
    const evenHead = head.next;
    let evenNode = head.next;
    
    while(evenNode?.next) {
        oddNode.next = evenNode.next;
        oddNode = oddNode.next;
        evenNode.next = oddNode.next;
        evenNode = evenNode.next;
    }
    
    oddNode.next = evenHead;
    
    return head;
};
//Time Complexity O(N)