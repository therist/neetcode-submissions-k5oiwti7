class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * pendingOpen = ['(']
     */
    isValid(s) {

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
}
