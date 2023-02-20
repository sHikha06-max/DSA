var canCompleteCircuit = function(gas, cost) {
    var sumDiff = 0;
    var diff = 0;
    var start = 0;
    for(var i = 0;i<gas.length;i++){
        diff +=gas[i]-cost[i];
        sumDiff += gas[i]-cost[i];
        
        if(diff <0){
            diff =0;
            start = i+1;
        }
    } 
    if(sumDiff >= 0){
        return start;
    }
    else {
        return -1;
    }
};

//Time Complexity O(N)