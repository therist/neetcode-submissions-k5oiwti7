class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let s1 = students.filter((s) => s === 1).length;
        let s0 = students.filter((s) => s === 0).length;

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
