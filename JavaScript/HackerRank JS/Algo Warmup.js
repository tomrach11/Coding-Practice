// Complete the plusMinus function below.
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
function plusMinus(arr) {
    let countPos = 0;
    let countNeg = 0;
    let countZero = 0;
    arr.forEach(num => {
        (num > 0) ? countPos++ : 
        (num < 0) ? countNeg++ :
        countZero++;
    })
    console.log((countPos / arr.length).toFixed(6) + '\n' +
                (countNeg / arr.length).toFixed(6) + '\n' + 
                (countZero / arr.length).toFixed(6));
}


// Complete the staircase function below.
// This is a staircase of size :
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size .
function staircase(n) {
    let result = '';
    let x = n-1;
    for(let i = 0; i < n; i++) {
        for( let j = 0; j < n; j++) {
            (j >= x) ? result += '#' : result += ' '; 
        }
        x--;
        result += '\n'
    }
    console.log(result);
}
// Best solution: print # n time then use padStart(n) to add whitespace 
// for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i).padStart(n));
// }


// Complete the miniMaxSum function below.
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example
// The minimum sum is  and the maximum sum is . The function prints
// 16 24
function miniMaxSum(arr) {
    console.error(arr.length)
    let min = arr.sort().slice(0, arr.length-1).reduce((total, num) => total += num);
    let max = arr.sort().slice(1, arr.length).reduce((total, num) => total += num);
    console.log(min + " " + max);
}
//Best solution is to sum arr then - min to find max/ sum arr - max to find min 


// Complete the 'birthdayCakeCandles' function below.
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
// Example:
// The maximum height candles are  units high. There are  of them, so return .
function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = Math.max(...candles);
    return candles.filter(candle => candle === tallest).length;
}


// Complete the timeConversion function below.
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example
// Return '12:01:00'.
// Return '00:01:00'.
function timeConversion(s) {
    let hour = parseInt(s.slice(0, 2));
    let clock = s.slice(8, 10);
    if (clock === 'PM') {
        hour = (hour == 12) ? hour = 12 : hour += 12;
        //better way is
        // hour = (hour % 12) + 12;
    } else {
        hour = (hour == 12) ? hour = 0 : hour;
    }
    return hour.toString().padStart(2, 0) + s.slice(2,8)
}
