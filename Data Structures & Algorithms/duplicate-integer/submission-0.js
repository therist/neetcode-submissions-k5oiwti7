class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let num of nums) {
            const foundInstances = nums.filter((n) => n === num);
            if (foundInstances.length > 1) return true;
        }
        return false;
    }
}
