class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        for (let i = 0; i < s.length; i++) {
            let substring = "";
            for (let y = i; y < s.length; y++) {
                if (substring.indexOf(s[y]) === -1) {
                    substring += s[y];
                    continue;
                } else {
                    break;
                }
            }
            if (longest < substring.length) longest = substring.length;
        }
        return longest;
    }
}
