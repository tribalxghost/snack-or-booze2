function unroll(squareArray) {
    const spiral = [];
    while (squareArray.length > 0) {
      spiral.push(...squareArray.shift());
      for (let i = 0; i < squareArray.length; i++) {
        spiral.push(squareArray[i].pop());
      }
      if (squareArray.length > 0) {
        spiral.push(...squareArray.pop().reverse());
      }
      for (let i = squareArray.length - 1; i >= 0; i--) {
        spiral.push(squareArray[i].shift());
      }
    }
    
    return spiral;
  }
  

  module.exports =  unroll


  const inputGrid = [
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [16, 15, 14, 13]
  ];
  
  const result = unroll(inputGrid);
  console.log(result); 


