
// Complete the sockMerchant function below.
// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
function sockMerchant(n, ar) {
    let map = new Map();
    let count = 0;
    ar.forEach(num => {
        (map.has(num)) ? map.set(num, map.get(num)+1) : map.set(num, 1);
    })
    console.error(map)
    for (let [key, value] of map.entries()) {
        count += Math.floor(value/2)
    }
    return count;
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
// -/\
//    \	/
//     \/\/

// -	   /\
//  \  /\	  /
//   \/  \/\/
function countingValleys(steps, path) {
    //highest step/ current step
    let count = 0;
    let currentStep = 0;
    let currentPath;
    //loop thought path
    for(let i = 0; i < steps; i++) {
        //if currentPath == D and path[i] != currentPath => count++
        // (currentPath == "U" && path[i] != "U") ? count++ : 0;
        ((currentPath == "U" && path[i] != "U") && currentStep <= 0) ? count++ : 0;
        //if D => current step - 1 else step + 1
        (path[i] === "D") ? currentStep-- : currentStep++;
        console.error(count + " " + currentPath + " " + currentStep)
        currentPath = path[i];
    }
    return count;
}