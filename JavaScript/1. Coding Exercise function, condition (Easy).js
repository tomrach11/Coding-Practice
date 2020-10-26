//Fucntion

// Average Of Three
// Write a method average_of_three(num1, num2, num3) that returns the average of three numbers
function averageOfThree(num1, num2, num3) {
  var sum = 0;
  sum = num1 + num2 + num3;
  var avg;
  avg = sum / 3;
  return avg;
}
console.log(averageOfThree(3, 7, 8));   //=> 6
console.log(averageOfThree(2, 5, 17));  //=> 8
console.log(averageOfThree(2, 8, 1));   //=> 3

// Goodbye
// Write a method goodbye(name) that takes in a string name and returns a string saying bye to that name. See the example calls.
function goodbye(name) {
    var goodbye;
    goodbye = "Bye " + name + ".";
    return goodbye;
}
console.log(goodbye("Daniel"));   //# => "Bye Daniel."
console.log(goodbye("Mark"));     //# => "Bye Mark."
console.log(goodbye("Beyonce"));  //# => "Bye Beyonce."

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//Conditional (IF)

// Is Div By Five
// Write a method is_div_by_5(number) that takes in a number and returns the boolean true if the given number is divisible by 5, false otherwise
function divByFive(number) {
    if (number%5 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(divByFive(10)); //# => true
console.log(divByFive(40)); //# => true
console.log(divByFive(42)); //# => false
console.log(divByFive(8) ); //# => false

// Either Only
// Write a method either_only(number) that takes in a number and returns true if the number is divisible by either 3 or 5, but not both. The method should return false otherwise.
function either_only(number) {
    if (!(number % 3 == 0 && number % 5 == 0) && (number % 3 == 0 || number % 5 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(either_only(9) ); //# => true
console.log(either_only(20)); //# => true
console.log(either_only(7) ); //# => false
console.log(either_only(15)); //# => false
console.log(either_only(30)); //# => false

// Larger Number
// Write a method larger_number(num1, num2) that takes in two numbers and returns the larger of the two numbers.
function larger_number(num1, num2){
    if (num1 > num2) {
        return num1;
    }
    else if (num2 > num1) {
        return num2;
    }
    else {
        return false;
    }
}
console.log(larger_number(42, 28) );  //# => 42
console.log(larger_number(99, 100));  //# => 100

// Number Check
// Write a method number_check(num) that takes in a number and returns a string. The method should return the string 'positive' if the num is positive, 'negative' if the num is negative, and 'zero' if the num is zero.
function number_check(num){
    if (num > 0){
        return "positive";
    }
    else if (num == 0) {
        return "zero";
    }
    else {
        return "negative";
    }
}
console.log(number_check(5) );   //# => "positive"
console.log(number_check(-2));   //# => "negative"
console.log(number_check(0) );   //# => "zero"

// Word Check
// Write a method word_check(word) that takes in a word and returns a string. The method should return the string "long" if the word is longer than 6 characters, "short" if it is less than 6 characters, and "medium" if it is exactly 6 characters long.
function word_check(word) {
    if (word.length > 6) {
        return "long";
    }
    else if (word.length < 6) {
        return "short";
    }
    else if (word.length == 6) {
        return "medium";
    }
}
console.log(word_check("contraption")); //# => "long"
console.log(word_check("fruit")      ); //# => "short"
console.log(word_check("puzzle")     ); //# => "medium"
