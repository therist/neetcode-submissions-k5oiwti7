class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let x = 0; x < nums.length; x++) {
            for (let y = x + 1; y < nums.length; y++) {
                if (nums[x] + nums[y] === target) return [x, y];
            }
        }
    }
}
