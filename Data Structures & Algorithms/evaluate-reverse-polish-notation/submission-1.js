class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        
        for (let i = 0; i < tokens.length; i++) {
            const val = tokens[i];
            if (!this.isOperator(val)) {
                stack.push(val);
                continue;
            }
            const num2 = +stack.pop();
            const num1 = +stack.pop();
            if (val === '/') stack.push(Math.trunc(num1 / num2))
            if (val === '+') stack.push(num1 + num2);
            if (val === '-') stack.push(num1 - num2);
            if (val === '*') stack.push(num1 * num2);
        }

        return stack[0];
    }

    isOperator(char) {
        if (char === '+' || char === '-' || char === '/' ||char === '*') return true;
        return false;
    }
}
