var tribonacci = function(n) {
    if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let a = 0, b = 1, c = 1, d = 2;
  for (let i = 3; i <= n; i++) {
    d = a + b + c;
    a = b;
    b = c;
    c = d;
  }
  return d;
};

//Time complexity O(N)
//Space complexity O(1)