const leapYears = function(yr) {

    if (typeof yr != 'number') return "ERROR";
    if (yr < 0) return "ERROR";

    if (yr % 4 === 0) {
        if (yr % 100 === 0) {
            if (yr % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
