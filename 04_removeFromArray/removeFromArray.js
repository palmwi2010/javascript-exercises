const removeFromArray = function(nums) {

    // Get optional arguments
    let [_, ...args] = arguments;
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        if (!args.includes(nums[i])) {
            output.push(nums[i]);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
