class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let bucket = [0, 0, 0];
        for (let num of nums) {
            bucket[num]++;
        }
        let i = 0;
        for (let b = 0; b < bucket.length; b++) {
            for (let k = 1; k <= bucket[b]; k++) {
                nums[i] = b;
                i++;
            }
        }
        return nums;
    }
}
