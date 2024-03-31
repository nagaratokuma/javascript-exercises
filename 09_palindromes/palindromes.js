const palindromes = function (original) {
    let processed_string = original.replaceAll(' ','').replaceAll(',','').replaceAll('.','').replaceAll('!','').toLowerCase();
    let reversed_string = processed_string.split("").reverse().join("")
    return processed_string === reversed_string;
};

// Do not edit below this line
module.exports = palindromes;
