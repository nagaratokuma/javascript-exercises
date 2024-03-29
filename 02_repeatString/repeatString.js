const repeatString = function(word, count) {
    if (count < 0) {
        return 'ERROR'
    }
    let string = '';
    for (let i = 0; i < count; i++){
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
