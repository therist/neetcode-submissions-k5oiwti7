class MyStack {
    stack;
    reArrangedStack;
    constructor() {
        this.stack = [];
        this.reArrangedStack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x);
        this.reArrangedStack = [];
        for (let i = this.stack.length - 1; i >= 0; i--) {
            this.reArrangedStack.push(this.stack[i]);
        }
    }

    /**
     * @return {number}
     */
    pop() {
        const result = this.reArrangedStack.shift();
        this.stack = [];
        for (let i = this.reArrangedStack.length - 1; i >= 0; i--) {
            this.stack.push(this.reArrangedStack[i]);
        }
        return result;
    }

    /**
     * @return {number}
     */
    top() {
        return this.reArrangedStack[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.reArrangedStack.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
