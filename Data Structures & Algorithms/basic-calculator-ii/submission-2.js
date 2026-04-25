class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    calculate(s) {
        const stack = [];
        let op = '+';
        let num = 0;
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (+char >= 0 && +char <= 9 && char !== ' ') {
                num = num * 10 + +char;
            }

            if ((char !== ' ' && this.isOperator(char)) || i === s.length - 1) {
                if (op === '+') stack.push(num);
                if (op === '-') stack.push(-num);
                if (op === '*') stack.push(stack.pop() * num);
                if (op === '/') stack.push(Math.trunc(stack.pop() / num))
                op = char;
                num = 0;
            }
        }

        return stack.reduce((a, b) => a + b, 0);
    }

    isOperator(char) {
        if (char === '+' || char === '-' || char === '/' || char === '*') return true;
        return false;
    }
}
