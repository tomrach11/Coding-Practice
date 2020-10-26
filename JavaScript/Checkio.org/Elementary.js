//index power
function indexPower(array, n){
    let num = array[n];
    let result = num;
    if (n > array.length - 1) {
        return -1;
    } else {
        return Math.pow(num, n);
    }
}
console.log(indexPower([1, 2, 3, 4], 2));// 9, "Square");
console.log(indexPower([1, 3, 10, 100], 3));// 1000000, "Cube");
console.log(indexPower([0, 1], 0));// 1, "Zero power");
console.log(indexPower([1, 2], 3));// -1, "IndexError");


//fizz buzz
function fizzBuzz(data) {
    if (data % 3 == 0 && data % 5 == 0) {
        return "Fizz Buzz";
    }
    if (data % 3 == 0) {
        return "Fizz";
    }
    if (data % 5 == 0) {
        return "Buzz";
    }
    else return "" + data + "";
}
console.log(fizzBuzz(15));// "Fizz Buzz", "15 is divisible by 3 and 5");
console.log(fizzBuzz(6));// "Fizz", "6 is divisible by 3");
console.log(fizzBuzz(5));// "Buzz", "5 is divisible by 5");
console.log(fizzBuzz(7));// "7", "7 is not divisible by 3 or 5");

//digit multiplication
function digitsMultip(data) {
    let array = data.toString().split("");
    let result = 1;
    array.forEach(function(num) {
        if (num != 0) {
            result = result * num;
        }
    });
    return result;
}
console.log(digitsMultip(123405));// 120, "1st");
console.log(digitsMultip(999));// 729, "2nd");
console.log(digitsMultip(1000));// 1, "3rd");
console.log(digitsMultip(1111));// 1, "4th");

//find message
function findMessage(data) {
    let result = "";
    data.split("").forEach(function(letter) {
        if (letter === letter.toUpperCase() && letter.toLowerCase() !== letter.toUpperCase()) {
            result += letter;
        }
    });
    return result;
}
console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."));// "HELLO", "hello"
console.log(findMessage("hello world!"));// "", "Nothing");
console.log(findMessage("HELLO WORLD!!!"));// "HELLOWORLD", "Capitals");


//second index
function secondIndex(text, symbol) {
    let result;
    let count = 0;
    text.split("").forEach((letter, i) => {
        if(count == 1 && letter == symbol) {
            result = i;
        }
        else if (letter == symbol) {
            count++;
        }
    });
    return result;
}
console.log(secondIndex("sims", "s"));// 3)
console.log(secondIndex("find the river", "e"));// 12)
console.log(secondIndex("hi", " "));// undefined)
console.log(secondIndex("hi mayor", " "));// undefined)
console.log(secondIndex("hi mr Mayor", " "));// 5)

//correct sentence
function correctSentence(text) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
    if (text[text.length - 1] != ".") {
        text += ".";
    }
    return text;
}
console.log(correctSentence("greetings, friends"));// "Greetings, friends.")
console.log(correctSentence("Greetings, friends"));// "Greetings, friends.")
console.log(correctSentence("Greetings, friends."));// "Greetings, friends.")
console.log(correctSentence("hi"));// "Hi.")
console.log(correctSentence("welcome to New York"));// "Welcome to New York.")

//even last
function evenLast(data) {
    let result = 0;
    let last_index = data[data.length - 1];
    data.forEach((num, i) => {
        if (i % 2 == 0) {
            result = result + num;
        }
    });
    if (last_index != null) {
        result = result * last_index;
    }
    return result;
}
console.log(evenLast([0, 1, 2, 3, 4, 5]));// 30, "(0+2+4)*5=30");
console.log(evenLast([1, 3, 5]));// 30, "(1+5)*5=30");
console.log(evenLast([6]));// 36, "(6)*6=36");
console.log(evenLast([]));// 0, "An empty array = 0");

//common word
function commonWords(first, second) {
    let result = [];
    let first_array = first.split(",");
    let second_array = second.split(",");
    first_array.forEach((word1) => {
        second_array.forEach((word2) => {
            if (word1 == word2) {
                result.push(word1);
            }
        });
    });
    return result.sort().join(",");
}
console.log(commonWords("hello,world", "hello,earth"));// "hello", "Hello");
console.log(commonWords("one,two,three", "four,five,six"));// "", "Too different");
console.log(commonWords("one,two,three", "four,five,one,two,six,three"));// "one,three,two", "1 2 3");

//most number (not working yet)
function mostNumbers(numbers){
    let min = Math.min(numbers);
    let max = Math.max(numbers);
    for (let i = 0; i < numbers.length; i++) {
        console.log(number[i]);
    }

    return max - min;
}
console.log(mostNumbers(1, 2, 3));// 2, "3-1=2");
console.log(mostNumbers(5, -5));// 10, "5-(-5)=10");
console.log(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5)*1000)); //, 12400, "10.2-(-2.2)=12.4");
console.log(mostNumbers());// 0, "Empty");
