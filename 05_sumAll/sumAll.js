const sumAll = function(num1, num2) {

    console.log("starting");

    if (typeof num1 != 'number' || typeof num2 != 'number')
        return "ERROR";

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (~~num1 != num1 || ~~num2 != num2) {
        return "ERROR";
    }

    // Swap order if num1 is bigger
    if (num1 > num2) {
        let tmp = num1;
        num1=num2;
        num2=tmp;
    }
    
    let total = 0;

    while (num1 <= num2) {
        total+=num1;
        num1++;
    }

    return total
};

// Do not edit below this line
module.exports = sumAll;
