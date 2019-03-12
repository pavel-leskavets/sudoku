module.exports = function solveSudoku(matrix) {
    function checkRows(row, currentNumber) {
      for(let k = 0; k < 9; k++) {
        if(matrix[row][k] == currentNumber) {
          return false
        }
      }
      return true
    }
    function checkColumns(column, currentNumber) {
      for(let k = 0; k < 9; k++) {
        if(matrix[k][column] == currentNumber) {
          return false
        }
      }
      return true
    }
    function checkBlock(row, column, currentNumber) {
      let rows = Math.floor(row / 3) * 3;
      let cols = Math.floor(column / 3 ) * 3;
      for(let r = 0; r < 3; r++) {
        for(let c = 0; c < 3; c++) {
          if(matrix[rows + r][cols + c] == currentNumber) {
            return false;
          }
        }
      }
      return true;
    }
    function checkPosition(row, column, currentNumber) {
      if(checkRows(row, currentNumber) && checkColumns(column, currentNumber) && checkBlock(row, column, currentNumber)) {
          return true
      } else {
          return false;
      }
      
    }
    this.matrix = matrix;
      for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
          if (matrix[row][column] == 0) {
            for (let currentNumber = 1; currentNumber <= 9; currentNumber++){
              if (checkPosition(row, column, currentNumber)) {
                matrix[row][column] = currentNumber;
                if (solveSudoku(matrix))  {
                  return matrix;
                }
                else {
                  matrix[row][column] = 0;
                }
              }
            }
            return false;
          }
        }
      }
    

  return matrix
}
