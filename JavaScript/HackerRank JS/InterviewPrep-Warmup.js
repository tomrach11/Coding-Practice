
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

// Complete the jumpingOnClouds function below.
// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.
// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .
function jumpingOnClouds(c) {
    //loop thought c using while loop till i > c.length
        //check if i+2 == 1 ? count++, i + 2
            // else i++ 
    let count = 0;
    let i = 0;
    while(i < c.length-1) {
        if (c[i+2] === 0 && (i+2) < c.length) {
            i += 2;
        } else {
            i++;
        }
        count++;
        console.error(i + " " + count)
    }
    return count
}

// Complete the repeatedString function below.
// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.
// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.
// For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.
function repeatedString(s, n) {
    //count "a" in s
    let counter = 0
    for(let letter of s){
        if(letter == "a"){
            counter++;
        }
    }
    //find how many time it repeat and * counter with it
    let multiple = n / s.length
    counter *= Math.floor(multiple);
    //find reminder and loop thought reminder and add to count
    let remainder = n % s.length
    for (let i=0; i<remainder;i++){
        if (s[i] == "a") counter++
    }
return counter
}
