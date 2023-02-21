var findCenter = function(edges) {
    const [u, v] = edges[0]
   const [w, x] = edges[1]
  if(u == w || u ==x )return u ;
 return v
  
};