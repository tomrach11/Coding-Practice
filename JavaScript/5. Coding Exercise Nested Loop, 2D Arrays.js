//2D Array, Nested Loop

// Combinations
// Write a method combinations that takes in an array of unique elements, the method should return a 2D array representing all possible combinations of 2 elements of the array.
function combinations(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        for(var i2 = 0; i2 < arr.length; i2++) {
            if(i < i2) {
                newArr.push([arr[i],arr[i2]]);
            }
        }
    }
    return newArr;
}
console.log(combinations(["a", "b", "c"])); //# => [ [ "a", "b" ], [ "a", "c" ], [ "b", "c" ] ]
console.log(combinations([0, 1, 2, 3])); //# => [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]

// Opposite Count
// Write a method opposite_count that takes in an array of unique numbers. The method should return the number of pairs of elements that sum to 0.
function opposite_count(arr) {
    var count = 0;
    arr.forEach(function(ele1, i1){
        arr.forEach(function(ele2, i2){
            if(i1 < i2) {
                if(ele1 + ele2 == 0) {
                    count++;
                }
            }
        });
    });
    return count;
}
console.log(opposite_count([ 2, 5, 11, -5, -2, 7 ])); //# => 2
console.log(opposite_count([ 21, -23, 24 -12, 23 ])); //# => 1

// Two Dimensional Sum
// Write a method two_d_Sum that takes in a two dimensional array and returns the sum of all elements in the array.
function two_d_sum(arr) {
    var sum = 0;
    arr.forEach(function(innerArr){
        innerArr.forEach(function(num){
            sum += num;
        });
    });
    return sum;
}
array_1 = [
  [4, 5],
  [1, 3, 7, 1]
];
console.log(two_d_sum(array_1));    //# => 21
array_2 = [
  [3, 3],
  [2],
  [2, 5]
];
console.log(two_d_sum(array_2));    //# => 15

// Two Dimensional Translate
// Write a method two_d_translate that takes in a 2 dimensional array and translates it into a 1 dimensional array. You can assume that the inner arrays always have 2 elements. See the examples.
function two_d_translate(arr) {
    var newArr = [];
    arr.forEach(function(innerArr){
        for(var i = 0; i < innerArr[1]; i++) {
            newArr.push(innerArr[0]);
        }
    });
    return newArr;
}
arr_1 = [
  ['boot', 3],
  ['camp', 2],
  ['program', 0]
];
console.log(two_d_translate(arr_1)); //# => [ 'boot', 'boot', 'boot', 'camp', 'camp' ]
arr_2 = [
  ['red', 1],
  ['blue', 4]
];
console.log(two_d_translate(arr_2)); //# => [ 'red', 'blue', 'blue', 'blue', 'blue' ]

// Array Translate
// Write a method array_translate that takes in an array whose elements alternate between words and numbers. The method should return a string where each word is repeated the number of times that immediately follows in the array.
function array_translate(arr) {
    var str = "";
    var i1 = 1;
    var i2 = 0;
    while(i1 < arr.length) {
        for(var i = 0; i < arr[i1]; i++) {
            str += arr[i2];
        }
        i1 += 2;
        i2 += 2;
    }
    return str;
}
console.log(array_translate(["Cat", 2, "Dog", 3, "Mouse", 1])); //# => "CatCatDogDogDogMouse"
console.log(array_translate(["red", 3, "blue", 1])); //# => "redredredblue"

//-------------------------------------------------------------------------------
//Medium

// Pig Latin Word
// Write a method pig_latin_word that takes in a word string and translates the word into pig latin.
// # Pig latin translation uses the following rules:
// # - for words that start with a vowel, add 'yay' to the end
// # - for words that start with a nonvowel, move all letters before the first vowel to the end of the word and add 'ay'
function pig_latin_word(word) {
    var vowels = "aeiou";
    var newWord = "";
    if(vowels.includes(word[0])) {
        newWord = word + "yay";
        return newWord;
    }
    else {
        for(var i = 0; i < word.length; i++) {
            if(vowels.includes(word[i])) {
                newWord = word.slice(i, word.length) + word.slice(0, i) + "ay";
                return newWord;
            }
        }
    }
}
console.log(pig_latin_word("apple") );  //# => "appleyay"
console.log(pig_latin_word("eat")   );  //# => "eatyay"
console.log(pig_latin_word("banana"));  //# => "ananabay"
console.log(pig_latin_word("trash") );  //# => "ashtray"
