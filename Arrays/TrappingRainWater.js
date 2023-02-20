var trap = function(height) {
    let leftMax = -1, 
       rightMax = -1, 
       left = 0, 
       right = height.length - 1, 
       water = 0;
 
   while (left <= right) {
       if(height[left]>leftMax)leftMax =height[left]
       else leftMax

       if(height[right]>rightMax)rightMax =height[right]
       else rightMax
    
     if (leftMax > rightMax) {
           water += rightMax - height[right]
           right--
       }
       else {
           water += leftMax - height[left]
           left++
       }
   }
 
   return water
};

//Time Complexity O(N)