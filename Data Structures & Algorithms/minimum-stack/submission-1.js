class MinStack { 
    stack;
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const min = this.stack.length === 0 ? val : Math.min(val, this.getMin());
        this.stack.push({ val: Number(val), min: min });
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();
        return null;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}

