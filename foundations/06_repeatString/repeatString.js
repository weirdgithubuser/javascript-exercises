const repeatString = function(str, num) {
    if (num < 0) return "ERROR"
    if (num === 0) return '';
    let newarr = new Array();
    for (let i = 0; i < num; i++){
        newarr.push(str);
    }
    return newarr.join('');
};

// Do not edit below this line
module.exports = repeatString;
