// Complete the alternatingCharacters function below.
// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.
// Your task is to find the minimum number of required deletions.
// For example, given the string , remove an  at positions  and  to make  in  deletions.
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// 3
// 4
// 0
// 0
// 4
function alternatingCharacters(s) {
    let count = 0;
    for(let i = 1; i < s.length; i++) {
        if(s[i] === s[i-1]) {
            count++;
        }
    }
    return count;
}

// Complete the makeAnagram function below.
// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?
// Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.
// For example, if  and , we can delete  from string  and  from string  so that both remaining strings are  and  which are anagrams.
// Explanation
// We delete the following characters from our two strings to turn them into anagrams of each other:
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We must delete  characters to make both strings anagrams, so we print  on a new line.
function makeAnagram(a, b) {
    let count = 0;
    let map1 = new Map();
    let map2 = new Map();
    map1 = stringToMap(a);
    map2 = stringToMap(b);
    console.error(map1);
    count += countDelete(map1, map2);
    count += countDelete(map2, map1);
    return count;
}
function stringToMap(str) {
    let newMap = new Map();
    for(let i = 0; i < str.length; i++) {
        if (newMap.has(str[i])) {
            newMap.set(str[i], newMap.get(str[i]) + 1);
        } else {
            newMap.set(str[i], 1);
        }
    }
    return newMap;
}
function countDelete(map1, map2) {
    let count = 0;
    for(let [key, value] of map1.entries()) {
        console.error(value + " " + map2.get(key));
        if((value - map2.get(key)) > 0) {
            console.error("test")
            count += value - map2.get(key);
        } else if (!map2.has(key)) {
            count += value;
        }
    }
    return count;
}