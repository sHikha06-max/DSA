var fib = function(n) {
    if (n <= 1) return n;
  let prev1 = 0, prev2 = 1, current = 0;
  for (let i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  return current;
};

//Time complexity O(N)
//Space complexity O(1)