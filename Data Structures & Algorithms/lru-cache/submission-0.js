class LRUCache {
    cacheCapacity;
    cache;
    /**
     * @param {number} capacity
     * [{ key , value }] vs { key: { value: string; timestamp; Date } }
     */
    constructor(capacity) {
        this.cacheCapacity = capacity;
        this.cache = []
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const index = this.cache.findIndex((item) => item.key === key)
        if (index !== -1) {
            const value = this.cache[index].value;
            this.cache.splice(index, 1);
            this.cache.unshift({ key, value });
            return value;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const index = this.cache.findIndex((item) => item.key === key)
        if (index !== -1) {
            this.cache.splice(index, 1);
            this.cache.unshift({ key, value });
        } else {
            this.cache.unshift({ key, value });
            if (this.cache.length > this.cacheCapacity) {
                this.cache.pop();
            }
        }
    }
}
