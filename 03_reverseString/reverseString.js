const reverseString = function(original) {
    let reversedString = "";
    for(let i = 0; i < original.length; i++) {
        reversedString += original.charAt(original.length - 1 - i)
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
