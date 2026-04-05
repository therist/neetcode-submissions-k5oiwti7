class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const order = []

        for (const num of nums) {
            let numFound = false;
            for (const r of order) {
                if (r[0] === num) {
                    r[1]++
                    numFound = true;
                }
            }
            if (!numFound) order.push([num, 1])
        }

        order.sort((a, b) => b[1] - a[1]);

        return order.slice(0, k).map((a) => a[0]);
    }
}
