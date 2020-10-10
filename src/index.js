module.exports = function toReadable(number) {
    let nums = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tensNums = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let result = "";
    let strNum = number.toString();
    let hundreds = strNum.substring(0, strNum.length - 2);
    let tens = strNum.substring(strNum.length - 2);
    let unites = strNum.substring(strNum.length - 1);
    let flooredTens = Math.floor(+tens / 10) * 10;
    if (number < 20) {
        return nums[number];
    } else if (number >= 20 && number < 100) {
        return number % 10 === 0
            ? (result = tensNums[number])
            : (result = `${tensNums[flooredTens]} ${nums[+unites]}`);
    } else if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return (result = `${nums[+hundreds]} hundred`);
        } else if (tens === "0") {
            return (result = `${nums[+hundreds]} hundred ${nums[+unites]}`);
        } else if (+tens < 20) {
            return (result = `${nums[+hundreds]} hundred ${nums[+tens]}`);
        } else {
            return tens % 10 === 0
                ? (result = `${nums[+hundreds]} hundred ${tensNums[+tens]}`)
                : (result = `${nums[+hundreds]} hundred ${
                      tensNums[+flooredTens]
                  } ${nums[+unites]}`);
        }
    }
};
