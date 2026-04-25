class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * pendingOpen = ['(']
     */
    isValid(s) {
        // let pendingOpen = []
        // for (let i = 0; i < s.length; i++) {
        //     if (i === 0 && this.isClosedBracket(s[i])) {
        //         return false;
        //     }
        //     if (i === s.length - 1 && this.isOpenBracket(s[i])) {
        //         return false;
        //     }
        //     if (this.isOpenBracket(s[i])) {
        //         pendingOpen.push(s[i]);
        //     } else if (this.isClosedBracket(s[i])) {
        //         if (pendingOpen.length === 0 || !this.isMatchingClosedBracket(pendingOpen[pendingOpen.length - 1], s[i])) {
        //             return false;
        //         } else {
        //             pendingOpen.pop();
        //         }
        //     }
        // }
        // return pendingOpen.length === 0;

        const stack = [];

        for (const char of s) {
            switch(char) {
                case '(':
                    stack.push('(');
                    stack.push(')');
                    break;
                case '{':
                    stack.push('{');
                    stack.push('}');
                    break;
                case '[':
                    stack.push('[');
                    stack.push(']');
                    break;
                default:
                    break;
            }
            if (char === ')' || char === '}' || char === ']') {
                if (stack.length === 0) return false;
                if (stack[stack.length - 1] === char) {
                    stack.pop();
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }

    // isOpenBracket(char) {
    //     return char === '(' || char === '{' || char === '[';
    // }

    // isClosedBracket(char) {
    //     return char === ')' || char === '}' || char === ']';
    // }

    // isMatchingClosedBracket(char1, char2) {
    //     const bracketPairs = [['(', ')'], ['{', '}'], ['[', ']']];
    //     for (const pair of bracketPairs) {
    //         if (pair[0] === char1 && pair[1] === char2) return true;
    //     }
    //     return false;
    // }
}
