class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let counter = 0;
        let max = 0;
        for (const num of nums) {
            counter = num === 1 ? counter + 1 : 0
            max = Math.max(max, counter);
        }

        return max;
    }
}
