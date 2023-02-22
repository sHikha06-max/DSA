var maximumBeauty = function(items, queries) {
    items.sort((a,b) => a[0]-b[0]);
   
    let max = items[0][1];

    for (let i = 0; i<items.length; i++) {
        max = Math.max(max, items[i][1]);
        items[i][1] = max;
    }

    const ans = [];

    for (const ele of queries) {
        let left = 0, right = items.length-1, a = 0;
        while (left<=right) {
            let mid = Math.floor(left+(right-left)/2);
            if (items[mid][0]<=ele) {
                a = items[mid][1]
                left = mid+1;
            } else right = mid-1;
        }
        ans.push(a)
    }
    return ans
};