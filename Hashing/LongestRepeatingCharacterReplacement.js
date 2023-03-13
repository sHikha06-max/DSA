var characterReplacement = function(s, k) {
    const chars = {}
    let left = 0, max = 0, output = 0
    for(let right = 0; right < s.length; right++) {
        const char = s[right]
        chars[char] = 1 + (chars[char] || 0)
        max = Math.max(max, chars[char])
        while((right-left+1) - max > k) {
                chars[s[left]] -= 1
                left++
          } output = Math.max(output, right - left +1)
    }
    return output 
};

//Time Complexity O(N)