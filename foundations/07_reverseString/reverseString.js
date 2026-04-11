const reverseString = function(str) {
    let newArr = new Array();
    let reverseArr = new Array();
    newArr = str.split('');
    reverseArr = newArr.reverse();
    return reverseArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
