class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let s1 = 0
        let s0 = 0;
        for (const student of students) {
            if (student === 1) s1++;
            else s0++;
        }

        for (const sandwich of sandwiches) {
            if (sandwich === 0) {
                if (s0 === 0) return s1;
                else s0--;
            }
            else {
                if (s1 === 0) return s0;
                else s1--;
            }
        }

        return 0;
    }
}
