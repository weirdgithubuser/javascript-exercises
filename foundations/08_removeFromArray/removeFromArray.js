const removeFromArray = function(arr, ...args) {
    newArr = new Array();
    arr.forEach((item) => {
        if (!(args.includes(item))) newArr.push(item);
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

