// 2023-05-12
// https://leetcode.com/problems/cache-with-time-limit/submissions/949240159/
var TimeLimitedCache = function() {
    // Our map will hold values of [val, timeout]
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const cachedVal = this.cache.get(key);
    if (cachedVal) {
        clearTimeout(cachedVal[1]);
    }
    const timeout = setTimeout(() => {
        this.cache.delete(key);
    }, duration);
    this.cache.set(key, [value, timeout]);

    return cachedVal !== undefined;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.get(key) !== undefined ? this.cache.get(key)[0] : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
