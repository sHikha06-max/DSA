var hasCycle = function(head) {
   let set = new Set();
        while (head != null) {
            if (set.has(head)) {
                return true;
            }
           set.add(head);
            head = head.next;
        }
        return false;
}

//Time complexity  O(N)