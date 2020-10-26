// Object
//Note: hash mean object

// Get Double Age
// Write a method get_double_age that takes in a hash and returns twice the "age" value of the hash.
function get_double_age(obj) {
    return obj.age * 2;
}
console.log(get_double_age({"name": "App Academy", "age": 5})); //# : 10
console.log(get_double_age({"name": "Ruby", "age": 23})      ); //# : 46

// Get Full Name
// Write a method get_full_name that takes in a hash containing a first, last, and title. The method should return a string representing the hash's full name
function get_full_name(obj) {
    str = "";
    str = obj.first + " " + obj.last + ", the " + obj.title;
    return str;
}
hash1 = {"first": "Michael", "last": "Jordan", "title": "GOAT"};
console.log(get_full_name(hash1)); //# : "Michael Jordan, the GOAT"
hash2 = {"first": "Fido", "last": "McDog", "title": "Loyal"};
console.log(get_full_name(hash2)); //# : "Fido McDog, the Loyal"

// Word Lengths
// Write a method word_lengths that takes in a sentence string and returns a hash where every key is a word of the sentence, and its' corresponding value is the length of that word.
function word_lengths(str) {
    arr = str.split(" ");
    obj = {};
    arr.forEach(function(value){
        obj[value] = value.length;
    });
    return obj;
}
console.log(word_lengths("this is fun")); //#: {"this":4, "is":2, "fun":3}
console.log(word_lengths("When in doubt, leave it out")); //#: {"When":4, "in":2, "doubt,":6, "leave":5, "it":2, "out":3}

// Retrieve Values
// Write a method retrieve_values that takes in two hashes and a key. The method should return an array containing the values from the two hashes that correspond with the given key.
function retrieve_values(obj1, obj2, key) {
    var arr = [];
    arr.push(obj1[key]);
    arr.push(obj2[key]);
    return arr;
}
dog1 = {"name": "Fido", "color": "brown"};
dog2 = {"name": "Spot", "color":  "white"};
console.log(retrieve_values(dog1, dog2, "name") ); //#:  ["Fido", "Spot"]
console.log(retrieve_values(dog1, dog2, "color")); // #:  ["brown", "white"]

// Cat Builder
// Write a method cat_builder that takes in a name, color, and age. The method should return a hash representing a cat with those values.
function cat_builder(name, color, age) {
    var obj = {};
    obj["name"] = name;
    obj["color"] = color;
    obj["age"] = age;
    return obj;
}
console.log(cat_builder("Whiskers", "orange", 3)); //#:  {"name": "Whiskers", "color": "orange", "age": 3}
console.log(cat_builder("Salem", "black", 100)); //#:  {"name": "Salem", "color": "black", "age": 100}

// Ae Count
// Write a method ae_count that takes in a string and returns a hash containing the number of a's and e's in the string. Assume the string contains only lowercase characters.
function ae_count(str) {
    var obj = {a: 0, e: 0};
    for(var i = 0; i < str.length; i ++) {
        if(str[i] == "a") {
            obj.a += 1;
        }
        if(str[i] == "e") {
            obj.e += 1;
        }
    }
    return obj;
}
console.log(ae_count("everyone can program")); //#:  {"a": 2, "e": 3}
console.log(ae_count("keyboard")); //#:  {"a": 1, "e": 1}

// Element Count
// Write a method element_count that takes in an array and returns a hash representing the count of each element in the array.
function element_count(arr){
    var obj = {};
    arr.forEach(function(ele){
        obj[ele] = 0;
    });
    arr.forEach(function(ele){
        obj[ele] += 1;
    });
    return obj;
}
console.log(element_count(["a", "b", "a", "a", "b"])); //#:  {"a": 3, "b": 2}
console.log(element_count(["red", "red", "blue", "green"])); //#:  {"red": 2, "blue": 1, "green": 1}

// Select Upcase Keys
// Write a method select_upcase_keys that takes in a hash and returns a new hash containing key-value pairs of the original hash that had uppercase keys. You can assume that the keys will always be strings.
function select_upcase_keys(obj){
    var newObj = {};
    for (var ele in obj) {
        if(ele == ele.toUpperCase()) {
            newObj[ele] = obj[ele];
        }
    }
    return newObj;
}
console.log(select_upcase_keys({"make":  "Tesla", "MODEL":  "S", "Year":  2018, "SEATS":  4})); //# :  {"MODEL": "S", "SEATS": 4}
console.log(select_upcase_keys({"DATE": "July 4th","holiday":  "Independence Day", "type": "Federal"})); //# :  {"DATE": "July 4th"}

// Hand Score
// Write a method hand_score that takes in a string representing a hand of cards and returns it's total score. You can assume the letters in the string are only A, K, Q, J. A is worth 4 points, K is 3 points, Q is 2 points, and J is 1 point. The letters of the input string not necessarily uppercase.
function hand_score(hand) {
    var score = 0;
    var objScore = {
        "A": 4,
        "K": 3,
        "Q": 2,
        "J": 1,
    };
    for(var i = 0; i < hand.length; i++) {
        var char = hand[i].toUpperCase();
        score += objScore[char];
    }
    return score;
}
console.log(hand_score("AQAJ")); //#:  11
console.log(hand_score("jJka")); //#:  9

// Frequent Letters
// Write a method frequent_letters that takes in a string and returns an array containing the characters that appeared more than twice in the string.
function frequent_letters(str) {
    var obj = {};
    var arr = [];
    var i = 0;
    for(i = 0; i < str.length; i++) {
        obj[str[i]] = 0;
    }
    for( i = 0; i < str.length; i++) {
        obj[str[i]] += 1;
    }
    for(var ele in obj) {
        if(obj[ele] > 2) {
            arr.push(ele);
        }
    }
    return arr;
}
console.log(frequent_letters('mississippi')); //#:  ["i", "s"]
console.log(frequent_letters('bootcamp')); //#:  []

// Hash To Pairs
// Write a method hash_to_pairs that takes in a hash and returns a 2D array representing each key-value pair of the hash.
function hash_to_pairs(obj) {
    var arr = [];
    for(var ele in obj) {
        arr.push([ele, obj[ele]]);
    }
    return arr;
}
console.log(hash_to_pairs({"name": "skateboard", "wheels": 4, "weight": "7.5 lbs"})); //#:  [["name", "skateboard"], ["wheels", 4], ["weight", "7.5 lbs"]]
console.log(hash_to_pairs({"kingdom": "animalia", "genus": "canis", "breed": "German Shepherd"})); //#:  #:  [["kingdom", "animalia"], ["genus", "canis"], ["breed", "German Shepherd"]]

// Unique Elements
// Write a method unique_elements that takes in an array and returns a new array where all duplicate elements are removed. Solve this using a hash.
function unique_elements(arr) {
    var obj = {};
    var newArr = [];
    arr.forEach(function(ele) {
        obj[ele] = 0;
    });
    for(var key in obj) {
        newArr.push(key);
    }
    return newArr;
}
console.log (unique_elements(['a', 'b', 'a', 'a', 'b', 'c'])); //#:  ["a", "b", "c"]

// Element Replace
// Write a method element_replace that takes in an array and a hash. The method should return a new array where elements of the original array are replaced with their corresponding values in the hash.
function element_replace(arr, obj) {
    var newArr = [];
    arr.forEach(function(ele) {
        if(ele in obj) {
            newArr.push(obj[ele]);
        }
        else {
            newArr.push(ele);
        }
    });
    return newArr;
}
arr1 = ["LeBron James", "Lionel Messi", "Serena Williams"];
hash1 = {"Serena Williams": "tennis", "LeBron James": "basketball"};
console.log(element_replace(arr1, hash1)); //# :  ["basketball", "Lionel Messi", "tennis"]
arr2 = ["dog", "cat", "mouse"];
hash2 = {"dog": "bork", "cat": "meow", "duck": "quack"};
console.log(element_replace(arr2, hash2)); //# :  ["bork", "meow", "mouse"]
