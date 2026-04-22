class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * pendingOpen = ['(']
     */
    isValid(s) {
        let pendingOpen = []
        for (let i = 0; i < s.length; i++) {
            if (i === 0 && this.isClosedBracket(s[i])) {
                return false;
            }
            if (i === s.length - 1 && this.isOpenBracket(s[i])) {
                return false;
            }
            if (this.isOpenBracket(s[i])) {
                pendingOpen.push(s[i]);
            } else if (this.isClosedBracket(s[i])) {
                if (pendingOpen.length === 0 || !this.isMatchingClosedBracket(pendingOpen[pendingOpen.length - 1], s[i])) {
                    return false;
                } else {
                    pendingOpen.pop();
                }
            }
        }
        return pendingOpen.length === 0;
    }

    isOpenBracket(char) {
        const openBrackets = ['(', '{', '['];
        return openBrackets.includes(char);
    }

    isClosedBracket(char) {
        const closedBrackets = [')', '}', ']'];
        return closedBrackets.includes(char);
    }

    isMatchingClosedBracket(char1, char2) {
        const bracketPairs = [['(', ')'], ['{', '}'], ['[', ']']];
        for (const pair of bracketPairs) {
            if (pair[0] === char1 && pair[1] === char2) return true;
        }
        return false;
    }
}
