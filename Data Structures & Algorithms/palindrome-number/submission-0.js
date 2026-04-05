class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        const s = x.toString();
        if (s.length === 1) return true;
        const b = [];
        for (let i = s.length - 1; i >= 0; i--) {
            b.push(s[i]);
        }
        if (s === b.join('')) return true;
        return false;
    }
}
