var reverseBetween = function (head, left, right) {
  var node = new ListNode(0);
  var curr = node;
  var temp = null;
  var reverseLast = null;
  var reverseHead = null;
  var reverseCurr = null;
  var i = 0;

  node.next = head;

  while (curr) {
    temp = curr.next;

    if (i === left - 1) {
      reverseHead = curr;
    }

    if (i === left) {
      reverseLast = curr;
      reverseCurr = curr;
    }

    if (i > left && i <= right) {
      curr.next = reverseCurr;
      reverseCurr = curr;
    }

    if (i === right) {
      reverseLast.next = temp;
      reverseHead.next = reverseCurr;
    }

    curr = temp;
    i++;
  }

  return node.next;
};

//Time Complexity O(N)
