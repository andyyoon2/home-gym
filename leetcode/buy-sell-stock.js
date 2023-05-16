// 2023-05-16
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/951716203/?envType=study-plan&id=data-structure-i
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }
    // Calculate base case
    const last = prices[prices.length-1];
    const penultimate = prices[prices.length-2];
    let profit = Math.max(0, last - penultimate);
    let maxVal = Math.max(last, penultimate);
    // Iterate through array
    for (let i = prices.length - 3; i >= 0; i--) {
        if (prices[i] > maxVal) {
            // Can't increase profit if we buy on this i, just continue
            maxVal = prices[i];
        } else {
            profit = Math.max(profit, maxVal - prices[i]);
        }
    }
    return profit;
};
