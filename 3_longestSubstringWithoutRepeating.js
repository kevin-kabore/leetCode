/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0,
        str = '',
        max_len = 0,
        cache = []

    while( i < s.length ) {
        if(cache[s[i]]){ // repeats
            if(str.length > max_len) {
                max_len = str.length
            }
            var start = str.indexOf(s[i]);
            str = str.substring(start + 1)

        }
        if (i < s.length) {
            str += s[i];
            cache[s[i]] = i + 1;
            i++
        }

    }
    if(str.length > max_len) { max_len = str.length}
    return max_len
};
