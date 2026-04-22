class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [{value, timestamp}])
        } else {
            let existingValue = this.keyStore.get(key);
            existingValue.push({ value, timestamp });
            this.keyStore.set(key, existingValue);
        }
        return null;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (this.keyStore.has(key)) {
            const values = this.keyStore.get(key)
            const entry = values.findLast((item) => item.timestamp <= timestamp);
            return entry ? entry.value : "";
        } else {
            return ""
        }
    }
}
