var titleToNumber = function (columnTitle) {
    let result = 0;
    let length = columnTitle.length - 1
    for (let i = 0; i < columnTitle.length; i++) {
        result += ((columnTitle[i].charCodeAt() - 64) * Math.pow(26, length--))
    }
    return result
};

console.log(titleToNumber('AB'));