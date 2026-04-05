class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = [];

        for (const str of strs) {
            let strPushed = false;
            for (const r of res) {
                if (this.isAnagram(r[0], str)) {
                    r.push(str);
                    strPushed = true;
                }
            }
            if (!strPushed) res.push([str]);
        }

        return res;
    }

    isAnagram(str1, str2) {
        if (str1.length === 0 || str2.length === 0) {
            if (str1.length === str2.length) {
                return true;
            } else {
                return false;
            }
        }
        const allChars = [...str1];
        allChars.push(...str2);
        for (const char of allChars) {
            let countCharStr1 = 0;
            let countCharStr2 = 0;
            if (str1) countCharStr1 = Array.from(str1).filter((c) => c === char).length;
            if (str2) countCharStr2 = Array.from(str2).filter((c) => c === char).length;
            if (countCharStr1 !== countCharStr2) return false;
        }
        return true;
    }
}
