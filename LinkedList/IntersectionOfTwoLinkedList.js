var getIntersectionNode = function(headA, headB) {
    var pA = headA;
        var pB = headB;
        while (pA != pB) {
            if(pA == null) pA = headB
            else pA = pA.next;

            if(pB == null) pB = headA
            else pB = pB.next;
           
        }
        return pA;
};
//Time Complexity O(N+M)