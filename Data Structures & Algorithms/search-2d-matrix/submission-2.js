class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const cols = matrix[0].length
        
        let left = 0;
        let right = (matrix.length * cols) - 1;


        while (left <= right) {
            let mid = Math.trunc((left + right) / 2);

            let row = Math.trunc(mid / cols);
            let column = mid % cols;

            if (matrix[row][column] === target) return true;
            if (target > matrix[row][column]) left = mid + 1;
            else right = mid - 1;
        }

        return false;
    }
}
