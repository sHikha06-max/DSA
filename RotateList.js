var rotateRight = function(head, k) {
    if(head == null || k == 0){
return head
}
let i = 1
let tail =head
while(tail.next != null){
i++
tail =tail.next
} 
if(k == i){
return head
}
while(k > i){
k = k - i
}
let j = i-k 
tail.next =head;
let newTail = tail;

while(j-- > 0){
    newTail = newTail.next
}
let newHead = newTail.next
newTail.next = null;
return newHead
};