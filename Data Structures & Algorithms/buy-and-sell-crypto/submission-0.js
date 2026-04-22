class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            const futurePrices = prices.slice(i + 1);
            const maxFuturePrice = Math.max(...futurePrices);
            const curProfit = maxFuturePrice - prices[i];
            if (curProfit > 0 && profit < curProfit) profit = curProfit;
        }
        return profit;
    }
}
