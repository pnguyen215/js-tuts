function birthday(s, d, m) {
    /**
     * s: array of integers
     * d: date
     * m: month
     * 
     * 
     * */
    // edge case #1, m > squares of chocolate
    let counter = 0
    let subArray = null
    if (m > s.length) {
        return counter
    }
    // edge case #2, month is jan, only on square of chocolate
    if (s.length === 1 && m === 1) {
        if (s[0] === d) {
            return 1
        }
    }
    // #3
    for (let i = 0; i < s.length - 1; i++) {
        subArray = s.slice(i, i + m)
        if (subArray.length === m) {
            let sum = subArray.reduce((previous, current) =>
                previous + current, 0);
            if (sum === d) {
                counter += 1
            }
        }
    }
    return counter
}



var result = birthday([1, 2, 1, 3, 3], 3, 2)
console.log(result)