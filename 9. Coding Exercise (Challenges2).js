// Challenges

// Caesar Cipher
// Write a method caesar_cipher that takes in a string and a number. The method should return a new string where every character of the original is shifted num characters in the alphabet.
function caesar_cipher(str, num) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newStr = "";
    for (var i1 = 0; i1 < str.length; i1++) {
        for (var i2 = 0; i2 < alphabet.length; i2++) {
            if (str[i1] == alphabet[i2]){
                var newChar = alphabet[(i2 + num) % 26];
                newStr += newChar;
            }
        }
    }
    return newStr;
}
console.log(caesar_cipher("apple", 1)   ); //#=> "bqqmf"
console.log(caesar_cipher("bootcamp", 2)); //#=> "dqqvecor"
console.log(caesar_cipher("zebra", 4)   ); //#=> "difve"

// Vowel Cipher
// Write a method vowel_cipher that takes in a string and returns a new string where every vowel becomes the next vowel in the alphabet.
function vowel_cipher(word) {
    var vowels = "aeiou";
    var newStr = "";
    for (var i1 = 0; i1 < word.length; i1++) {
        if (vowels.includes(word[i1])) {
            for (var i2 = 0; i2 < vowels.length; i2++) {
                if (word[i1] == vowels[i2]) {
                    var newChar = vowels[(i2 + 1) % 5];
                    newStr += newChar;
                }
            }
        }
        else {
            newStr += word[i1];
        }
    }
    return newStr;
}
console.log(vowel_cipher("bootcamp") ); //#=> buutcemp
console.log(vowel_cipher("paper cup")); // #=> pepir cap

// Double Letter Count
// Write a method that takes in a string and returns the number of times that the same letter repeats twice in a row.
function double_letter_count(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if ( str[i] == str[i + 1]) {
            count++;
        }
    }
    return count;
}
console.log(double_letter_count("the jeep rolled down the hill")); //#=> 3
console.log(double_letter_count("bootcamp")); //#=> 1

// Adjacent Sum
// Write a method adjacent_sum that takes in an array of numbers and returns a new array containing the sums of adjacent numbers in the original array. See the examples.
function adjacent_sum(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length - 1; i++) {
        var sum = arr[i] + arr[i + 1];
        newArr.push(sum);
    }
    return newArr;
}
console.log(adjacent_sum([3, 7, 2, 11])); //#=> [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
console.log(adjacent_sum([2, 5, 1, 9, 2, 4])); //#=> [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]

// Pyramid Sum
// Write a method pyramid_sum that takes in an array of numbers representing the base of a pyramid. The function should return a 2D array representing a complete pyramid with the given base. To construct a level of the pyramid, we take the sum of adjacent elements of the level below.
function pyramid_sum(arr) {
    var finalArr = [arr];
    while (finalArr.length < arr.length) {
        var newArr = adjacent_sum(finalArr[0]);
        finalArr.unshift(newArr);
    }
    return finalArr;
}
function adjacent_sum(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length - 1; i++) {
        var sum = arr[i] + arr[i + 1];
        newArr.push(sum);
    }
    return newArr;
}
console.log(pyramid_sum([1, 4, 6])); //#=> [[15], [5, 10], [1, 4, 6]]
console.log(pyramid_sum([3, 7, 2, 11])); //#=> [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]

// All Else Equal
// Write a method all_else_equal that takes in an array of numbers. The method should return the element of the array that is equal to half of the sum of all elements of the array. If there is no such element, the method should return nil.
function all_else_equal(arr) {
    var sum = 0;
    arr.forEach(function(num){
        sum += num;
    });
    var half = sum / 2;
    if (arr.includes(half)) {
        return half;
    }
    else {
        return null;
    }
}
console.log(all_else_equal([2, 4, 3, 10, 1])); //#=> 10, because the sum of all elements is 20
console.log(all_else_equal([6, 3, 5, -9, 1])); //#=> 3, because the sum of all elements is 6
console.log(all_else_equal([1, 2, 3, 4])    ); //#=> nil, because the sum of all elements is 10 and there is no 5 in the array

// Anagrams
// Write a method anagrams? that takes in two words and returns a boolean indicating whether or not the words are anagrams. Anagrams are words that contain the same characters but not necessarily in the same order. Solve this without using .sort
function anagrams(word1, word2) {
    var obj1 = {};
    var obj2 = {};
    //create obj = 0
    for (var i1 = 0; i1 < word1.length; i1++) {
        obj1[word1[i1]] = 0;
    }
    for (var i2 = 0; i2 < word2.length; i2++) {
        obj2[word2[i2]] = 0;
    }
    //count char to object
    for (i1 = 0; i1 < word1.length; i1++) {
        obj1[word1[i1]] += 1;
    }
    for (i2 = 0; i2 < word2.length; i2++) {
        obj2[word2[i2]] += 1;
    }
    //compare obj
    for (var key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
        else if (obj1[key] != obj2[key]){
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(anagrams("cat", "act")        );  //#=> true
console.log(anagrams("restful", "fluster"));  //#=> true
console.log(anagrams("cat", "dog")        );  //#=> false
console.log(anagrams("boot", "bootcamp")  );  //#=> false

// Consonant Cancel
// Write a method consonant_cancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.
function consonant_cancel(sent) {
    var vowels = "aeiou";
    var arr = sent.split(" ");
    var newArr = [];
    newArr = arr.map(function(ele){
        for (var i = 0; i < ele.length; i++){
            if (vowels.includes(ele[i])) {
                var newWord = ele.slice(i, ele.length);
                return newWord;
            }
        }
    });
    return newArr.join(" ");
}
console.log(consonant_cancel("down the rabbit hole")); //#=> "own e abbit ole"
console.log(consonant_cancel("writing code is challenging")); //#=> "iting ode is allenging"

// Same Char Collapse
// Write a method same_char_collapse that takes in a string and returns a collapsed version of the string. To collapse the string, we repeatedly delete 2 adjacent characters that are the same until there are no such adjacent characters. If there are multiple pairs that can be collapsed, delete the leftmost pair. For example, we take the following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
function same_char_collapse(str) {
    var newStr = str;
    while (newStr != collapse(newStr)) {
        newStr = collapse(newStr);
        console.log(newStr);
    }
    return newStr;
}
function collapse(str) {
    var newStr = str;
    for (var i = 0; i < str.length; i++) {
        if ( str[i] == str [i + 1]) {
            newStr = newStr.slice(0, i) + newStr.slice(i + 2, str.length);
            return newStr;
        }
    }
    return newStr;
}
console.log(same_char_collapse("zzzxaaxy"))  ; //#=> "zy"
//# because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(same_char_collapse("uqrssrqvtt")); //#=> "uv"
//# because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
