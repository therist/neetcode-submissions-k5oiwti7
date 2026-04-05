class Solution {
    /**
     * @param {character[][]} boxGrid
     * @return {character[][]}
     */
    rotateTheBox(boxGrid) {
        let left = 0;
        let right = boxGrid[0].length - 1;
        let top = 0;
        let bottom = boxGrid.length - 1;

        let rotatedBox = [];

        //rotate the box firstbottom
        while (left <= right) {
            let line = [];
            for (let i = bottom; i >= top; i--) {
                line.push(boxGrid[i][left])
            }
            rotatedBox.push(line);
            left++;
        }

        left = 0;
        right = rotatedBox[0].length - 1
        bottom = rotatedBox.length - 1

        //apply some gravity baby
        while (left <= right) {
            let checkOnceMore = false;
            for (let i = bottom; i > top; i--) {
                if (rotatedBox[i][left] === '.' && rotatedBox[i - 1][left] === '#') {
                    rotatedBox[i][left] = '#';
                    rotatedBox[i - 1][left] = '.';
                    checkOnceMore = true;
                }
            }
            if (!checkOnceMore) left++;
        }
        return rotatedBox;
    }
}
