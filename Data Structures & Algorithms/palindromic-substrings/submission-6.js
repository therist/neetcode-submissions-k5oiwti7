class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        if (s.length === 0) return 0;
        let palindromes = 0;
        palindromes += s.length;

        // too slow
        // for (let i = 2; i <= s.length; i++) {
        //     for (let y = 0; y < s.length - i + 1; y++) {
        //         if (this.isPalindrome(s.slice(y, y + i))) palindromes++;
        //     }
        // }

        // odd length checks
        for (let i = 1; i < s.length - 1; i++) {
            for (let y = 1; i - y >= 0 && y + i < s.length; y++) {
                const charRight = s[i + y];
                const charLeft = s[i - y];
                if (charRight === charLeft) palindromes++;
                else break;
            }
        }

        for (let i = 0; i < s.length - 1; i++) {
            for (let y = 1; i - (y - 1) >= 0 && i + y < s.length; y++) {
                const charLeft = s[i - (y - 1)];
                const charRight = s[i + y];
                if (charRight === charLeft) palindromes++;
                else break;
            }
        }

        return palindromes;
    }
}
