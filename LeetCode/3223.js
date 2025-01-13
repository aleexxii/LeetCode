var minimumLength = function (s) {
    const charFreequency = new Array(26).fill(0)

    let minimum_length = 0;

    for (let char of s) {
        charFreequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    for (let freequency of charFreequency) {
        if (freequency == 0) continue

        if (freequency % 2 == 0) {
            minimum_length += 2
        } else {
            minimum_length += 1
        }
    }
    return minimum_length
};

// aaa => 1
// aaaa => 2

s = "aabccabba" 
console.log(minimumLength(s)) 