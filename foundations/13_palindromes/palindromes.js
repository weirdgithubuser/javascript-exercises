const palindromes = function (string) {
    const arr = string.toLowerCase().split('').map(item => {
        if(!(['!','.',',',' '].includes(item))){
            return item
        }
    });
    return (arr.join('') === arr.reverse().join(''))
};

// Do not edit below this line
module.exports = palindromes;
