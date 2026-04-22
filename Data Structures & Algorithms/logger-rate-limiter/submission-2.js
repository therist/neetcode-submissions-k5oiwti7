class Logger {
    printedMessages;
    step = 10;
    constructor() {
        this.printedMessages = {}
    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if ((!timestamp && timestamp !== 0) || !message) return null;

        if (this.printedMessages[message] || this.printedMessages[message] === 0) {
            if (timestamp >= this.printedMessages[message] + this.step) {
                this.printedMessages[message] = timestamp;
                return true;
            } else {
                return false;
            }
        } else {
            this.printedMessages[message] = timestamp;
            return true;
        }
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
