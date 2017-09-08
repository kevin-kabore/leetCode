var reverse = function(x) {
    let sign = (x>0) ? 1 : -1
    x = Math.abs(x);
    let str = x.toString().split('').reverse().join('')
    let result = sign * Number(str)
    if(result>2147483647 || result < -2147483648) return 0;
    return result
};
