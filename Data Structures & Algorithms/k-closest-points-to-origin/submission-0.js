class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const result = [];
        const distances = []
        let maxDistance = 0;
        let maxDistanceIndex = 0;

        for (let i = 0; i < points.length; i++) {
            if (result.length < k) {
                result.push(points[i]);
                const distance = Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2);
                distances.push(distance);
                if (maxDistance < distance) {
                    maxDistance = distance;
                    maxDistanceIndex = i;
                }
            } else {
                const distance = Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2);
                if (distance < maxDistance) {
                    result[maxDistanceIndex] = points[i];
                    distances[maxDistanceIndex] = distance;
                    maxDistance = 0;
                    maxDistanceIndex = 0;
                    for (let y = 0; y < k; y++) {
                        if (distances[y] > maxDistance) {
                            maxDistance = distances[y];
                            maxDistanceIndex = y;
                        }
                    }
                }
            }
        }

        return result;

    }
}
