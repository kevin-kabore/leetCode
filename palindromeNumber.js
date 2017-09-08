var isPalindrome = function(x) {
    if (x == x.toString().split('').reverse().join('')) {
        return true
     } else {
        return false
     }
};

// For loop
var isPalindrome = function(x) {
    x = x.toString();
    // negatives are not palindromes
    if(x[0] === '-') {
        return false
    }
    // compare head and tail of string
    for(var i = 0, j = x.length -1; i < x.length, j >= 0; i++, j-- ){
        if(x[i] !== x[j]) {
            return false
        }
        if(i === j ) {break;} //middle index
    }
    return true
};
