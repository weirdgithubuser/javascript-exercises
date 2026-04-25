const findTheOldest = function(arr) {
    oldest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(!(arr[i].yearOfDeath)){
            arr[i].yearOfDeath = (new Date()).getFullYear();
        }
        if((arr[i].yearOfDeath - arr[i].yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)){
            oldest = arr[i];
        }
    }
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
