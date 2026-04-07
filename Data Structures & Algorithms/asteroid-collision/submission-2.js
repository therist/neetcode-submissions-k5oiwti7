class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        for (let i = 0; i < asteroids.length; i++) {
            const direction = Math.sign(asteroids[i]);
            if (direction === -1 && i === 0) continue;
            if (direction === 1 && i === asteroids.length - 1) continue;
            const colision = Math.sign(asteroids[i + direction]) !== direction
            if (colision) {
                const asteroid1 = asteroids[i];
                const asteroid2 = asteroids[i + direction];
                if (Math.abs(asteroid1) !== Math.abs(asteroid2)) {
                    asteroids.splice(Math.abs(asteroid1) < Math.abs(asteroid2) ? i : i + direction, 1);
                } else {
                    asteroids.splice(i, 2);
                }
                i -= Math.min(i + 1, 2);
            }
        }

        return asteroids;
    }
}
