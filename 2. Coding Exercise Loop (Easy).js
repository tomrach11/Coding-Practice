//loop
//Easy

// Count E
// Write a method count_e(word) that takes in a string word and returns the number of e's in the word
function count_e(word) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "e") {
            count++;
        }
    }
    return count;
}
console.log(count_e("movie")); //# => 1
console.log(count_e("excellent")); //# => 3

//Count A
// Write a method count_a(word) that takes in a string word and returns the number of a's in the word. The method should count both lowercase (a) and uppercase (A)
function count_a(word) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "a" || word[i] == "A") {
            count++;
        }
    }
    return count;
}
console.log(count_a("application"))  //# => 2
console.log(count_a("bike")       )  //# => 0
console.log(count_a("Arthur")     )  //# => 1
console.log(count_a("Aardvark")   )  //# => 3

// Sum Nums
// Write a method sum_nums(max) that takes in a number max and returns the sum of all numbers from 1 up to and including max.
function sum_nums(max) {
    var sum = 0;
    for (var i = 1; i <= max; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum_nums(4)) //# => 10, because 1 + 2 + 3 + 4 = 10
console.log(sum_nums(5)) //# => 15

// Factorial
// Write a method factorial(num) that takes in a number num and returns the product of all numbers from 1 up to and including num.
function factorial(num) {
    var fac = 1;
    for (var i = 1; i <= num; i++) {
        fac = fac * i;
    }
    return fac;
}
console.log(factorial(3)) //# => 6, because 1 * 2 * 3 = 6
console.log(factorial(5)) //# => 120, because 1 * 2 * 3 * 4 * 5 = 120

//----------------------------------------------------------------
//Medium

// Count Vowels
// Write a method, count_vowels(word), that takes in a string word and returns the number of vowels in the word. Vowels are the letters a, e, i, o, u.
function count_vowels(word) {
    var count = 0;
    var vowel = "aeiou";
    for (var i = 0; i < word.length; i++) {
        for (var i2 = 0; i2 < word.length; i2++) {
            if (word[i] == vowel[i2]) {
                count++;
            }
        }
    }
    return count;
}
console.log(count_vowels("bootcamp"))  //# => 3
console.log(count_vowels("apple")   )  //# => 2
console.log(count_vowels("pizza")   )  //# => 2

// Reverse
// Write a method reverse(word) that takes in a string word and returns the word with its letters in reverse order.
function reverse(word) {
    var newWord = "";
    for(var i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }
    return newWord;
}
console.log(reverse("cat")        )  //# => "tac"
console.log(reverse("programming"))  //# => "gnimmargorp"
console.log(reverse("bootcamp")   )  //# => "pmactoob"

// Is Palindrome
// Write a method is_palindrome(word) that takes in a string word and returns the true if the word is a palindrome, false otherwise. A palindrome is a word that is spelled the same forwards and backwards.
function is_palindrome(word) {
    var newWord = "";
    var i = 0;
    var i2 = word.length-1
    for(i ; i < word.length; i++) {
        if (word[i] != word[i2]) {
            return false
        }
        i2--;
    }
    return true;
}
console.log(is_palindrome("racecar") ) //# => true
console.log(is_palindrome("kayak")   ) //# => true
console.log(is_palindrome("bootcamp")) //# => false
