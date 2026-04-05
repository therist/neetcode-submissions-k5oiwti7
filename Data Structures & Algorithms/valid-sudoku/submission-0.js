class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //check rows first
        for (const row of board) {
            for (const field of row) {
                if (field === '.') continue;
                if (row.filter((n) => n === field).length > 1) return false;
            }
        }

        //check columns next
        for (let column = 0; column < 9; column++) {
            let count = {}
            for (let row = 0; row < 9; row++) {
                if (board[row][column] === '.') continue;
                if (count[board[row][column]]) return false;
                count[board[row][column]] = 1;
            }
        }

        //check boxes finally
        let quadrantStarts = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
        for (let i = 0; i < 9; i++) {
            if (!this.isQuadrantValid(quadrantStarts[i], board)) return false;
        }
        
        //if no problem is found return true
        return true;
    }

    isQuadrantValid(init, board) {
        let count = {}
        for (let column = init[1]; column < init[1] + 3; column++) {
            for (let row = init[0]; row < init[0] + 3; row++) {
                if (board[row][column] === '.') continue;
                if (count[board[row][column]]) return false;
                count[board[row][column]] = 1;
            }
        }
        return true;
    }
}
