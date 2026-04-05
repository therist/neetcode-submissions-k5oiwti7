class Solution {
    /**
     * @param {number[][]} board
     * @return {number[][]}
     */
    candyCrush(board) {

        //find candy values first

        let candy = this.findCandy(board);

        while (candy[0].length > 0 || candy[1].length > 0) {
            for (let candyRow of candy[0]) {
                board[candyRow[0]][candyRow[1]] = 0;
            }
            for (let candyColumn of candy[1]) {
                board[candyColumn[0]][candyColumn[1]] = 0;
            }
            board = this.drop(board);
            candy = this.findCandy(board);
        }
        return board;
    }

    drop(board) {
        let left = 0;
        let right = board[0].length - 1;
        let top = 0;
        let bottom = board.length - 1;

        for (let column = left; column <= right; column++) {
            let lowestZero = -1
            for (let row = bottom; row >= top; row--) {
                if (board[row][column] === 0) {
                    lowestZero = Math.max(lowestZero, row);
                } else if (lowestZero >= 0) {
                    let temp = board[row][column];
                    board[row][column] = board[lowestZero][column];
                    board[lowestZero][column] = temp;
                    lowestZero--;
                }

            }
        }
        return board;
    }

    findCandy(board) {
        let left = 0;
        let right = board[0].length - 1;
        let top = 0;
        let bottom = board.length - 1;

        let candyColumns = [];
        let candyRows = [];

        for (let row = top; row <= bottom; row++) {
            for (let column = left; column <= right; column++) {

                //find row with 3 or more matchicandyRowsng values
                if (column > left && column < right) {
                    if (board[row][column] === board[row][column - 1] &&
                        board[row][column] === board[row][column + 1] &&
                        board[row][column] !== 0) {
                        candyRows.push([row, column - 1]);
                        candyRows.push([row, column]);
                        candyRows.push([row, column + 1]);
                    }
                }

                //find column with 3 or more matching values
                if (row > top && row < bottom) {
                    if (board[row - 1][column] === board[row][column] &&
                        board[row][column] === board[row + 1][column] &&
                        board[row][column] !== 0
                    ) {
                        candyColumns.push([row - 1, column]);
                        candyColumns.push([row, column]);
                        candyColumns.push([row + 1, column]);
                    }
                }
            }
        }
        return [candyRows, candyColumns];
    }
}