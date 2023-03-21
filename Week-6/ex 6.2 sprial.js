
    function sprial( matrix){
        let startRow = 0;
        let startCol = 0;
        let endRow = matrix.length-1;
         let endCol = matrix[0].length-1;
        while(startRow<=endRow && startCol<=endCol){
            //top
            for(let j = startCol; j<=endCol; j++){
                console.log(matrix[startRow][j]+" ");
            }
            //right
            for(let i = startRow+1; i<=endRow; i++){
                console.log(matrix[i][endCol]+" ");
            }
            //bottom
            for(let j = endCol-1; j>=startCol; j--){
                if(startRow == endRow){
                    break;
                }
                console.log(matrix[endRow][j]+" ");
            }
            //left
            for(let i = endRow-1; i>=startRow+1; i--){
                if(startCol == endCol){
                    break;
                }
                console.log(matrix[i][startCol]+" ");
            }
            startCol++;
            startRow++;
            endCol--;
            endRow--;
        }
        console.log();
    }
 
        let matrix =  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
    sprial(matrix);

    
    
