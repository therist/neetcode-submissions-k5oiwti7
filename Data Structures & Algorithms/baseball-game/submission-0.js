class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (let i = 0; i < operations.length; i++) {
            if (Number.isInteger(+operations[i])) {
                stack.push(+operations[i]);
                continue;
            }
            if (operations[i] === '+') {
                stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
                continue;
            }
            if (operations[i] === 'C') {
                stack.pop();
                continue;
            }
            if (operations[i] === 'D') {
                stack.push(stack[stack.length - 1] * 2);
                continue;
            }
        }


        return stack.reduce((a, b) => a + b, 0);
    }
}
