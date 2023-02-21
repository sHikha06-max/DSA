var validTicTacToe = function(board) {
    let b = board;

 let count = { X: 0, O: 0, " ": 0 };
 for (let br of b) for (let j = 0; j < 3; j++) count[br[j]]++;
 if (count["X"] !== count["O"] && count["X"] !== count["O"] + 1) return false;     
 let isGameOver = { X: false, O: false };
 for (let i = 0; i < 3; i++) {
     if (b[i][0] === b[i][1] && b[i][1] === b[i][2]) isGameOver[b[i][0]] = true;  
     if (b[0][i] === b[1][i] && b[1][i] === b[2][i]) isGameOver[b[0][i]] = true;  
 if (b[0][0] === b[1][1] && b[1][1] === b[2][2]) isGameOver[b[0][0]] = true;      
 if (b[0][2] === b[1][1] && b[1][1] === b[2][0]) isGameOver[b[0][2]] = true;   
 if (isGameOver["X"] && isGameOver["O"]) return false;                        
 if (isGameOver["X"]) return count["X"] - count["O"] === 1;                     
 if (isGameOver["O"]) return count["X"] - count["O"] === 0;                       
 }
 return true;

};