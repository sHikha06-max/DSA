var deleteNode = function(node) {
    var curr = node.next;
    node.val = curr.val;
    node.next = curr.next;
};

//Time Complexity O(1)