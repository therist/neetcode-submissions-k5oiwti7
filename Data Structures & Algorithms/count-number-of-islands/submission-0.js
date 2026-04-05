class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid) return 0;

        let rows = grid.length;
        let columns = grid[0].length;

        let islands = 0;

        const bfs = (r, c) => {
            const q = []
            grid[r][c] = '0';
            q.push([r, c]);

            while (q.length > 0) {
                const [row, col] = q.shift();
                const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

                for (const [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;
                    if (nr >= 0 && nc >= 0 && nr < rows && nc < columns & grid[nr][nc] === '1') {
                        q.push([nr, nc]);
                        grid[nr][nc] = '0';
                    }
                }
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (grid[r][c] === '1') {
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}