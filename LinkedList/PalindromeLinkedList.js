var isPalindrome = function (head) {
  if (head === null || head.next == null) return true;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast) {
    slow = slow.next;
  }

  slow = reverse(slow);
  fast = head;

  while (slow) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};

function reverse(head) {
  let prev = null;
  let next;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}


//Time complexity O(N)
//Space Complexity O(1)