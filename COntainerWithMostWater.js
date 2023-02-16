var maxArea = function(height) {
    var i = 0;
    var j = height.length-1;
    var max= 0;
     var area
    while(i<j){
         area = (j-i)*(Math.min(height[i],height[j]));
        max = Math.max(max,area);
        if(height[i]<height[j]) i++;
        else j--;
    }
    return max;
};