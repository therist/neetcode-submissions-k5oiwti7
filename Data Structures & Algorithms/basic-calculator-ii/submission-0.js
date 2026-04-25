class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    calculate(s) {
        if (!s) return 0;
        const elements = s.split(/([+\-/\*])/);
        for (let i = 0; i < elements.length; i++) {
            const curElement = elements[i]?.trim();
            const prevElement = elements[i - 1]?.trim();
            const nextElement = elements[i + 1]?.trim();
            if (i === 0 && this.isCharacterOperator(curElement)) {
                throw Error("First character cannot be an operator")
            }
            if (this.isCharacterOperator(curElement) && this.isCharacterOperator(nextElement)) {
                throw Error("Two operators next to each other");
            }
            if (curElement === "*" || curElement === "/") {
                if (nextElement == 0 && curElement === "/") {
                    throw Error("Division with 0 not allowed");
                }
                let calculationResult =
                    curElement === "*"
                        ? +prevElement * +nextElement
                        : Math.floor(+prevElement / +nextElement);

                elements.splice(i - 1, 3, calculationResult.toString());
                i -= 2;
            }
        }

        let result = 0;

        for (let i = 0; i < elements.length; i++) {
            const curElement = elements[i]?.trim();
            const nextElement = elements[i + 1]?.trim();
            if (i === 0) {
                result = +curElement;
                continue;
            }
            if (curElement === '+') {
                result += +nextElement;
            } else if (curElement === '-'){
                result -= +nextElement;
            }
        }

        return result;
    }

    isCharacterOperator(char) {
        if (char === "*" || char === "/" || char === "+" || char === "-") return true;
        return false;
    }
}
