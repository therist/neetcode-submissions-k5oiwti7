class HitCounter {
    hits;
    relevantHistory = 300;
    constructor() {
        this.hits = {};
    }

    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp) {
        if (!this.hits[timestamp]) {
            this.hits[timestamp] = 1;
        } else {
            this.hits[timestamp]++;
        }
    }

    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        let totalHits = 0;
        for (let i = timestamp; i > timestamp - this.relevantHistory; i--) {
            if (i <= 0) return totalHits;
            if (!this.hits[i]) continue;
            else totalHits += this.hits[i];
        }
        return totalHits;
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
