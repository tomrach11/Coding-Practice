//Array
//Easy

// Doubler
// Write a method doubler(numbers) that takes an array of numbers and returns a new array
// where every element of the original array is multiplied by 2.
function doubler(numbers) {
    var arr = numbers;
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * 2;
    }
    return newArr;
}
console.log(doubler([1, 2, 3, 4])); //# => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])   ); //# => [14, 2, 16]

// Yell
// Write a method yell(words) that takes in an array of words and returns a
// new array where every word from the original array has an exclamation point after it.
function yell(words) {
    var arr = words;
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] + "!";
    }
    return newArr;
}
console.log(yell(["hello", "world"]));  //# => ["hello!", "world!"]
console.log(yell(["code", "is", "cool"]));  //# => ["code!", "is!", "cool!"]

// Element Times Index
// Write a method element_times_index(nums) that takes in an array of numbers and returns a new array containing every number of the original array multiplied with its index.
function element_times_index(nums) {
    var arr = nums;
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * i;
    }
    return newArr;
}
console.log(element_times_index([4, 7, 6, 5])      ); //# => [0, 7, 12, 15]
console.log(element_times_index([1, 1, 1, 1, 1, 1])); //# => [0, 1, 2, 3, 4, 5]

// Even Nums
// Write a method even_nums(max) that takes in a number max and returns an array containing all even numbers from 0 to max
function even_nums(max) {
    var arr = [];
    for(var i = 0; i <= max; i++) {
        if(i % 2 == 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(even_nums(10)); //# => [0, 2, 4, 6, 8, 10]
console.log(even_nums(5) ); //# => [0, 2, 4]

// Range
// Write a method range(min, max) that takes in two numbers min and max. The method should return an array containing all numbers from min to max inclusive.
function range(min, max) {
    var arr = [];
    for(var i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(range(2, 7)  ); //# => [2, 3, 4, 5, 6, 7]
console.log(range(13, 20)); //# => [13, 14, 15, 16, 17, 18, 19, 20]

// Odd Range
// Write a method odd_range(min, max) that takes in two numbers min and max. The method should return an array containing all odd numbers from min to max (inclusive).
function odd_range(min, max) {
    var arr = [];
    for(var i = min; i <= max; i++) {
        if(i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(odd_range(11, 18)); //# => [11, 13, 15, 17]
console.log(odd_range(3, 7)  ); //# => [3, 5, 7]

// Reverse Range
// Write a method reverse_range(min, max) that takes in two numbers min and max. The function should return an array containing all numbers from min to max in reverse order. The min and max should be excluded from the array
function reverse_range(min, max) {
    var arr = [];
    for(var i = max - 1; i > min; i--) {
        arr.push(i);
    }
    return arr;
}
console.log(reverse_range(10, 17)); //# => [16, 15, 14, 13, 12, 11]
console.log(reverse_range(1, 7)  ); //# => [6, 5, 4, 3, 2]

// First Half
// Write a method first_half(array) that takes in an array and returns a new array containing the first half of the elements in the array. If there is an odd number of elements, return the first half including the middle element.
function first_half(array) {
    var newArr = [];
    // var mid = ceil(array.length / 2);
    var mid = 0;
    if (array.length % 2 == 0){
        mid = array.length / 2;
    }
    else {
        mid = (array.length / 2) + 1;
    }
    for(var i = 0; i < mid; i++) {
        newArr.push(array[i]);
    }
    return newArr;
}
console.log(first_half(["Brian", "Abby", "David", "Ommi"])); //# => ["Brian", "Abby"]
console.log(first_half(["a", "b", "c", "d", "e"])         ); //# => ["a", "b", "c"]

// Factors Of
// Write a method factors_of(num) that takes in a num and returns an array of all positive numbers less than or equal to num that can divide num.
function factors_of(num) {
    var arr = [];
    for (var i = 0; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(factors_of(3) );  //# => [1, 3]
console.log(factors_of(4) );  //# => [1, 2, 4]
console.log(factors_of(8) );  //# => [1, 2, 4, 8]
console.log(factors_of(9) );  //# => [1, 3, 9]
console.log(factors_of(16));  //# => [1, 2, 4, 8, 16]

// Select Odds
// Write a method select_odds(numbers) that takes in an array of numbers and returns a new array containing the odd numbers of the original array.
function select_odds(numbers) {
    var arr = numbers;
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(select_odds([13, 4, 3, 7, 6, 11])); //# => [13, 3, 7, 11]
console.log(select_odds([2, 4, 6])           ); //# => []

// Select Long Words
// Write a method select_long_words(words) that takes in an array of words and returns a new array containing all of the words of the original array that are longer than 4 characters.
function select_long_words(words) {
    var arr = words;
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(select_long_words(["what", "are", "we", "eating", "for", "dinner"])); //# => ["eating", "dinner"]
console.log(select_long_words(["keep", "coding"])                              ); //# => ["coding"]

// Sum Elements
// Write a method sum_elements(arr1, arr2) that takes in two arrays. The method should return a new array containing the results of adding together corresponding elements of the original arrays. You can assume the arrays have the same length.
function sum_elements(arr1, arr2) {
    var newArr = [];
    for(var i = 0; i < arr1.length; i++) {
        var sum = arr1[i] + arr2[i];
        newArr.push(sum);
    }
    return newArr;
}
console.log(sum_elements([7, 4, 4], [3, 2, 11])                           ); //# => [10, 6, 15]
console.log(sum_elements(["cat", "pizza", "boot"], ["dog", "pie", "camp"])); //# => ["catdog", "pizzapie", "bootcamp"]

// Fizz Buzz
// Write a method fizz_buzz(max) that takes in a number max and returns an array containing all numbers greater than 0 and less than max that are divisible by either 4 or 6, but not both.
function fizz_buzz(max) {
    var newArr = [];
    for(var i = 1; i < max; i++) {
        if( (i % 6 == 0 || i % 4 == 0) &&
            !(i % 6 == 0 && i % 4 == 0) ) {
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(fizz_buzz(20)); //# => [4, 6, 8, 16, 18]
console.log(fizz_buzz(15)); //# => [4, 6, 8]
