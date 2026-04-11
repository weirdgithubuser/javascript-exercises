const sumAll = function(start, end) {
    if (start > 0 && end > 0 && start < end &&
        Math.floor(start) === start && Math.floor(end) === end){
        let sum = start;
        for (let i = start + 1; i <= end; i++){
            sum += i;
        }
        return sum;
    }else if (start > 0 && end > 0 && start > end &&
        Math.floor(start) === start && Math.floor(end) === end){
        let sum = end;
        for (let i = end + 1; i <= start; i++){
            sum += i;
        }
        return sum;
    }else {
        return "ERROR";
    };

};

// Do not edit below this line
module.exports = sumAll;
