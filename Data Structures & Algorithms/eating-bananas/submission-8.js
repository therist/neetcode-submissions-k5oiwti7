class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) { //[30,11,23,4,20],6
        let left = 1; //18
        let right = Math.max(...piles); //23
        let viableSpeeds = []; //[24]

        if (piles.length === 1) return Math.ceil(piles[0] / h);

        while (left <= right) {
            let k = Math.trunc((left + right) / 2); //20
            if (this.canEatAll([...piles], k, h)) {
                viableSpeeds.push(k);
                right = k - 1;
            } else {
                left = k + 1;
            }
        }
        return Math.min(...viableSpeeds);
    }

    canEatAll(piles, k, h) {
        let hours = 0;
        for (const p of piles) {
            hours += Math.ceil(p / k)
        }
        return hours <= h;
    }
}
