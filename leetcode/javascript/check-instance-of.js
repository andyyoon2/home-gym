// 2023-04-16
// https://leetcode.com/problems/check-if-object-instance-of-class/submissions/935022632/
/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false;
    }
    return Object(obj) instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

