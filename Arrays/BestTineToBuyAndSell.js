var maxProfit = function(prices) {
    if (prices.length <= 1){
			return 0;
		}
		var min = prices[0];
		var max_diff = 0;
		for (var i=1;i<prices.length;i++){
			if (prices[i] < min){
				min = prices[i];
			}
			var temp = prices[i] - min;
			if (temp > max_diff){
				max_diff = temp;
			}
		}
		return max_diff;
};