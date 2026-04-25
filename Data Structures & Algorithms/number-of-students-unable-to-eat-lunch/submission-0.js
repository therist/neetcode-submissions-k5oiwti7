class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let j = 0;
        let counterPushed = 0;
        for (let i = 0; i < students.length && counterPushed < (sandwiches.length - j); i++) {
            if (students[i] === sandwiches[j]) {
                j++;
                counterPushed = 0;
                continue;
            } else {
                students.push(students[i]);
                counterPushed++;
            }
        }

        return counterPushed;
    }
}
