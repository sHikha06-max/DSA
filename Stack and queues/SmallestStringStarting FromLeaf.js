var smallestFromLeaf = function(root) {
    let min = null
  const aux = (node = root, current = '') => {
    const str = String.fromCharCode(97 + node.val) + current
    if (!node.left && !node.right) {
      if (!min) {
        min = str
      } else {
        min = str.localeCompare(min) < 0 ? str : min
      }
    }
    if (node.left) {
      aux(node.left, str)
    }
    if (node.right) {
      aux(node.right, str)
    }
  }
  aux()
  return min 
};