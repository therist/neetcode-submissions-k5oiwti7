class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memorySet = [];
        for (let i = n; i >= 0; i--) {
            if (i >= n - 1) {
                memorySet[i] = 1;
            } else {
                memorySet[i] = memorySet[i + 1] + memorySet[i + 2];
            }
        }
        return memorySet[0];

        // Elegant recursive solution, too inefficient for use
        // if (n === 0) {
        //     return 1;
        // } else if (n < 0) {
        //     return 0;
        // }
        // return this.climbStairs(n - 1) + this.climbStairs(n - 2);
    }
}
