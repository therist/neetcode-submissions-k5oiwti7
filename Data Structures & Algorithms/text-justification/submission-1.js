class Solution {
    /**
     * @param {string[]} words
     * @param {number} maxWidth
     * @return {string[]}
     */
    fullJustify(words, maxWidth) {
        const resp = [];
        let line = [];
        let length = 0;
        for (let i = 0; i < words.length; i++) {
            if (length + line.length + words[i].length > maxWidth) {
                let extraSpace = maxWidth - length;
                let spaces = Math.trunc(extraSpace / (Math.max(1, line.length) - 1));
                let remainder = extraSpace % (Math.max(1, line.length) - 1);

                for (let j = 0; j < line.length - 1; j++) {
                    line[j] += ' '.repeat(spaces);
                    if (remainder) {
                        line[j] += ' ';
                        remainder--;
                    }
                }

                if (line.length === 1) {
                    spaces = maxWidth - line[0].length;
                    line[0] += ' '.repeat(spaces);
                }

                resp.push(line.join(''));
                line = [];
                length = 0;
                i--;

                continue;
            }

            line.push(words[i]);
            length += words[i].length;
        }

        let lastLine = line.join(' ');
        let trailSpace = maxWidth - lastLine.length;
        resp.push(lastLine += ' '.repeat(trailSpace));
        return resp;
    }
}
