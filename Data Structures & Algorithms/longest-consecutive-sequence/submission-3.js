class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // array of unique values
        if (!nums || nums.length === 0) return 0;
        const unique = [];
        for (const num of nums) {
            if (unique.filter((u) => u === num).length) continue;
            unique.push(num);
        }

        //sort
        unique.sort((a, b) => a - b);

        //check consecutive
        let counter = 1;
        let curCounter = 0;
        for (let n = 0; n < unique.length; n++) {
            if (unique[n + 1] - unique[n] === 1) {
                if (!curCounter) {
                    curCounter = 2
                } else {
                    curCounter++;
                }
                counter = Math.max(counter, curCounter);
            } else {
                curCounter = 0;
            }
        }

        return counter;
    }
}
