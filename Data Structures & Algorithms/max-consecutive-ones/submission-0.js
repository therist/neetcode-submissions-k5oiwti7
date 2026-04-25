class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let counter = 0;
        let max = 0;
        for (const num of nums) {
            if (num === 1) {
                counter++;
                if (max < counter) max = counter;
                continue;
            }
            counter = 0;
        }

        return max;
    }
}
