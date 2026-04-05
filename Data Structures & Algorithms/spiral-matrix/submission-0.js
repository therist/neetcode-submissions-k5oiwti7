class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const finalArray = [];
        let left = 0;
        let right = matrix[0].length;
        let top = 0;
        let bottom = matrix.length;

        while (left < right && top < bottom) {
            for (let i = left; i < right; i++) {
                finalArray.push(matrix[top][i]);
            }
            top++;
            for (let i = top; i < bottom; i++) {
                finalArray.push(matrix[i][right - 1]);
            }
            right--;
            if (!(left < right && top < bottom)) break;
            for (let i = right; i > left; i--) {
                finalArray.push(matrix[bottom - 1][i - 1])
            }
            bottom--;
            for (let i = bottom; i > top; i--) {
                finalArray.push(matrix[i - 1][left])
            }
            left++;
        }
        return finalArray;
    }
}
