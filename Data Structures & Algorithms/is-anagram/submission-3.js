class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sLetters = Array.from(s);
        const tLetters = Array.from(t);

        if (!sLetters || !tLetters) return false;

        if (sLetters.length != tLetters.length) return false;

        let sSort = s.split('').sort().join();
        let tSort = t.split('').sort().join();

        return sSort == tSort;
    }
}
