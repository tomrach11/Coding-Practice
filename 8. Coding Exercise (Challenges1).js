// Challenges

// Last Index
// Write a method last_index that takes in a string and a character. The method should return the last index where the character can be found in the string.
function last_index(str, char) {
    var index = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] == char) {
            index = i;
        }
    }
    return index;
}
console.log(last_index("abca", "a")       ); //#=> 3
console.log(last_index("mississipi", "i") ); //#=> 9
console.log(last_index("octagon", "o")    ); //#=> 5
console.log(last_index("programming", "m")); //#=> 7

// Prime
// Write a method prime? that takes in a number and returns a boolean, indicating whether the number is prime. A prime number is only divisible by 1 and itself.
function prime(num) {
    if(num < 1) {
        return false;
    }
    for(var i = 2; i < num; i++) {
        if(num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(prime(2) ); //#=> true
console.log(prime(5) ); //#=> true
console.log(prime(11)); //#=> true
console.log(prime(4) ); //#=> false
console.log(prime(9) ); //#=> false
console.log(prime(-5)); //#=> false

// Pick Primes
// Write a method pick_primes that takes in an array of numbers and returns a new array containing only the prime numbers.
function pick_primes(numbers) {
    return numbers.filter(function(ele){
        return prime(ele);
    });
}
function prime(num) {
    if(num < 1) {
        return false;
    }
    for(var i = 2; i < num; i++) {
        if(num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(pick_primes([2, 3, 4, 5, 6]));  //#=> [2, 3, 5]
console.log(pick_primes([101, 20, 103, 2017]));  //#=> [101, 103, 2017]

// Prime Factors
// Write a method prime_factors that takes in a number and returns an array containing all of the prime factors of the given number.
function prime_factors(num) {
    var arr = [];
    var i;
    for(i = 2; i < num; i++) {
        if(num % i == 0) {
            if(prime(i)){
                arr.push(i);
            }
        }
    }
    return arr;
}
function prime(num) {
    if(num < 1) {
        return false;
    }
    for(i = 2; i < num; i++) {
        if(num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(prime_factors(24));  //#=> [2, 3]
console.log(prime_factors(60)); //#=> [2, 3, 5]

// Greatest Factor Array
// Write a method greatest_factor_array that takes in an array of numbers and returns a new array where every even number is replaced with it's greatest factor. A greatest factor is the largest number that divides another with no remainder. For example the greatest factor of 16 is 8. (For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy, ha)
function greatest_factor_array(arr) {
    var newArr = [];
    newArr = arr.map(function(num){
        if(num % 2 == 0) {
            for(var i = num - 1; i > 1; i--) {
                if(num % i == 0) {
                    return i;
                }
            }
        }
        else {
            return num;
        }
    });
    return newArr;
}
console.log(greatest_factor_array([16, 7, 9, 14])); //# => [8, 7, 9, 7]
console.log(greatest_factor_array([30, 3, 24, 21, 10])); //# => [15, 3, 12, 21, 5]

// Perfect Square
// Write a method perfect_square? that takes in a number and returns a boolean indicating whether it is a perfect square. A perfect square is a number that results from multiplying a number by itself. For example, 9 is a perfect square because 3  3 = 9, 25 is a perfect square because 5  5 = 25.
function perfect_square(num) {
    for(var i = 2; i < num; i++){
        if(i * i == num) {
            return true;
        }
    }
    return false;
}
console.log(perfect_square(5) );  //#=> false
console.log(perfect_square(12));  //#=> false
console.log(perfect_square(30));  //#=> false
console.log(perfect_square(9) );  //#=> true
console.log(perfect_square(25));  //#=> true

// Triple Sequence
// Write a method triple_sequence that takes in two numbers, start and length. The method should return an array representing a sequence that begins with start and is length elements long. In the sequence, every element should be 3 times the previous element. Assume that the length is at least 1.
function triple_sequence(start, end) {
    var arr = [start];
    while (arr.length < end) {
        var num = 0;
        num = arr[arr.length - 1] * 3;
        arr.push(num);
    }
    return arr;
}
console.log(triple_sequence(2, 4)); //# => [2, 6, 18, 54]
console.log(triple_sequence(4, 5)); //# => [4, 12, 36, 108, 324]

// Summation Sequence
// A number's summation is the sum of all positive numbers less than or equal to the number. For example: the summation of 3 is 6 because 1 + 2 + 3 = 6, the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21. Write a method summation_sequence that takes in a two numbers: start and length. The method should return an array containing length total elements. The first number of the sequence should be the start number. At any point, to generate the next element of the sequence we take the summation of the previous element. You can assume that length is not zero.
function summation_sequence(start, length) {
    var arr = [start];
    while (arr.length < length) {
        var num = arr[arr.length-1];
        arr.push(summation(num));
    }
    return arr;
}
function summation(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(summation_sequence(3, 4)); //# => [3, 6, 21, 231]
console.log(summation_sequence(5, 3)); //# => [5, 15, 120]

// Fibonacci
// The fibonacci sequence is a sequence of numbers whose first and second elements are 1. To generate further elements of the sequence we take the sum of the previous two elements. For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. Write a method fibonacci that takes in a number length and returns the fibonacci sequence up to the given length.
function fibonacci(length) {
    var arr = [1, 1];
    while (arr.length < length) {
        var first = arr[arr.length-1];
        var second = arr[arr.length-2];
        arr.push(first + second);
    }
    var newArr = [];
    for (var i = 0; i < length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(fibonacci(0)); //# => []
console.log(fibonacci(1)); //# => [1]
console.log(fibonacci(6)); //# => [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); //# => [1, 1, 2, 3, 5, 8, 13, 21]
