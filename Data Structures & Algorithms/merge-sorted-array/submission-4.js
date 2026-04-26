class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let j = m + n;
        while (n > 0) {
            if (m === 0 || nums2[n - 1] >= nums1[j - n - 1] || j <= n) {
                nums1[j - 1] = nums2[n - 1];
                n--;
            } else {
                nums1[j - 1] = nums1[j - n - 1];
            }
            j--;
        }
                // old approach high complexity
                // let y = m;
                // while (nums1[y - 1] >= nums2[n - 1]) {
                //     nums1[y] = nums1[y - 1];
                //     y--;
                // }
                // nums1[y] = nums2[n - 1];
                // m++;
    }
}
