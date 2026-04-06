class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        let result = 0;

        let arr = Array.from(s);

        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case "M":
                    result += 1000;
                    break;
                case "D":
                    result += 500;
                    break;
                case "C":
                    if (arr[i + 1] === "M" || arr[i + 1] === "D") result -= 100;
                    else result += 100;
                    break;
                case "L":
                    result += 50;
                    break;
                case "X":
                    if (arr[i + 1] === "C" || arr[i + 1] === "L") result -= 10;
                    else result += 10;
                    break;
                case "V":
                    result += 5;
                    break;
                case "I":
                    if (arr[i + 1] === "X" || arr[i + 1] === "V") result -= 1;
                    else result += 1;
                    break;
                default:
                    result += 0;
                    break;
            }
        }

        return result;
    }
}
