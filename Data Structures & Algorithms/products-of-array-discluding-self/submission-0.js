class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            res.push(1);
            for (let y = 0; y < nums.length; y++) {
                if (y === i) continue;
                res[i] = res[i] * nums[y];
            }
        }

        return res;
    }
}
