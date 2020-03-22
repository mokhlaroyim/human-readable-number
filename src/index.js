module.exports = function toReadable(number) {
    var numToStr = number.toString()
    var numLen = numToStr.length
    var answer = ''
    if (number == undefined || numLen == 0)
        return

    var oneDigit = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"]
    var twoDigit = ["ten", "eleven", "twelve",
        "thirteen", "fourteen",
        "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"]
    var tenMultiple = ["twenty", "thirty", "forty", "fifty",
        "sixty", "seventy", "eighty", "ninety"]
    var tensPower = ["hundred"]

    if (numLen == 1) {
        answer = oneDigit[number]
        return answer
    }
    else if (numLen == 2 && (number < 20 && number > 9)) {
        answer = twoDigit[number - 10].toString()
        return answer
    }
    else if (numLen == 2 && number > 19) {
        var temp = parseInt(numToStr[0])
        var temp1 = parseInt(numToStr[1])
        if (temp1 != 0)
            return answer = '' + tenMultiple[temp - 2] + ' ' + oneDigit[temp1]
        else
            return answer = '' + tenMultiple[temp - 2]
    }
    else if (numLen == 3) {
        var temp = parseInt(numToStr[0])
        var temp1 = parseInt(numToStr[1])
        var temp2 = parseInt(numToStr[2])
        if (temp2 == 0) {
            if (temp1 == 0)
                return answer = '' + oneDigit[temp] + ' ' + tensPower[0];
            else if (temp1 == 1)
                return answer = '' + oneDigit[temp] + ' ' + tensPower[0] + ' ' + twoDigit[temp1 - 1];
            else
                return answer = '' + oneDigit[temp] + ' ' + tensPower[0] + ' ' + tenMultiple[temp1 - 2];
        }
        else if (temp2 != 0) {
            if (temp1 == 0)
                return answer = '' + oneDigit[temp] + ' ' + tensPower[0] + ' ' + oneDigit[temp2];
            else if (temp1 == 1)
                return answer = '' + oneDigit[temp] + ' ' + tensPower[0] + ' ' + twoDigit[temp2]
            else
                return answer = '' + oneDigit[temp] + ' ' + tensPower[0] + ' ' + tenMultiple[temp1 -2]
                    + ' ' + oneDigit[temp2];
        }
    }
}