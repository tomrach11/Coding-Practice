//Enumerables (iterate thru array with out using for or while loop)
//***forEach()** indexOf(), array.split(), array.join(), string.slice()

// To Initials
// Write a method to_initials that takes in a person's name string and returns a string representing their initials.
function to_initials(name) {
    var arrName = name.split(" "); //convert string to array
    var initials = "";
    arrName.forEach(function(value){
        initials += value[0];
    });
    return initials;
}
console.log(to_initials("Kelvin Bridges")   );   //# => "KB"
console.log(to_initials("Michaela Yamamoto"));   //# => "MY"
console.log(to_initials("Mary La Grange")   );   //# => "MLG"

// First In Array
// Write a method first_in_array that takes in an array and two elements, the method should return the element that appears earlier in the array.
function first_in_array(arr, ele1, ele2) {
    var result = "";
    if(arr.indexOf(ele1) < arr.indexOf(ele2)) {
        result = ele1;
    }
    else {
        result = ele2;
    }
    return result;
}
console.log(first_in_array(["a", "b", "c", "d"], "d", "b")); //# => "b"
console.log(first_in_array(["cat", "bird" ,"dog", "mouse" ], "dog", "mouse")); //# => "dog"

// Abbreviate Sentence
// Write a method abbreviate_sentence that takes in a sentence string and returns a new sentence where every word longer than 4 characters has all of it's vowels removed.
function abbreviate_sentence(sent) {
    var arr = sent.split(" ");
    var newArr = [];
    var newSent = "";

    arr.forEach(function(value){
        if(value.length > 4){
            var newWord = remove_vowels(value);
            newArr.push(newWord);
        }
        else {
            newArr.push(value);
        }
    });
    newSent = newArr.join(" ");
    return newSent;
}
function remove_vowels(word){
    var vowels = "aeiou";
    var newWord = "";
    for(var i = 0; i < word.length; i++){
        if(!vowels.includes(word[i])){
            newWord += word[i];
        }
    }
    return newWord;
}
console.log(abbreviate_sentence("follow the yellow brick road"));  //# => "fllw the yllw brck road"
console.log(abbreviate_sentence("what a wonderful life")       );  //# => "what a wndrfl life"

//------------------------------------------------------------------------------
//array.map() (iterate thru array with out using for or while loop and create a new array)

// Format Name
// Write a method format_name that takes in a name string and returns the name properly capitalized.
function format_name(name) {
    arr = name.split(" ");
    newArr = arr.map(function(value){
        var name = "";
        name = value[0].toUpperCase() + value.slice(1,value.length).toLowerCase();
        return name;
    });
    return newArr.join(" ");
}
console.log(format_name("chase WILSON")); //# => "Chase Wilson"
console.log(format_name("brian CrAwFoRd scoTT")); //# => "Brian Crawford Scott"

// Reverse Words
// Write a method reverse_words that takes in a sentence string and returns the sentence with the order of the characters in each word reversed. Note that we need to reverse the order of characters in the words, do not reverse the order of words in the sentence.
function reverse_words(sent) {
    var arr = sent.split(" ");
    var newArr = arr.map(function(value){
        var newWord = value.split("");
        newWord = newWord.reverse();
        return newWord.join("");
    });
    return newArr.join(" ");
}
console.log(reverse_words('keep coding')); //# => 'peek gnidoc'
console.log(reverse_words('simplicity is prerequisite for reliability')); //# => 'yticilpmis si etisiuqererp rof ytilibailer'

// Rotate Array
// Write a method rotate_array that takes in an array and a number. The method should return the array after rotating the elements the specified number of times. A single rotation takes the last element of the array and moves it to the front.
function rotate_array(arr, num) {
    for(var i = 0; i < num; i++) {
        ele = arr.pop();
        arr.unshift(ele);
    }
    return arr;
}
console.log(rotate_array([ "Matt", "Danny", "Mashu", "Matthias" ], 1)); //# => [ "Matthias", "Matt", "Danny", "Mashu" ]
console.log(rotate_array([ "a", "b", "c", "d" ], 2)); //# => [ "c", "d", "a", "b" ]

// Is Valid Email
// Write a method is_valid_email that takes in a string and returns a boolean indicating whether or not it is a valid email address.
// # For simplicity, we'll consider an email valid when it satisfies all of the following:
// # - contains exactly one @ symbol
// # - contains only lowercase alphabetic letters before the @
// # - contains exactly one . after the @
function is_valid_email(str) {
    var arr = str.split("@");
    //validate exactly one @ symbol
    if(arr.length != 2) {
        return false;
    }
    //validate exactly one . after the @
    var arrAfter = arr[1].split(".");
    if(arrAfter.length != 2) {
        return false;
    }
    var arrBefore = arr[0];
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < arrBefore.length; i++) {
        if(!alphabet.includes(arrBefore[i])) {
            return false;
        }
    }
    return true;
}
console.log(is_valid_email("abc@xy.z")        ); //# => true
console.log(is_valid_email("jdoe@gmail.com")  ); //# => true
console.log(is_valid_email("jdoe@g@mail.com") ); //# => false
console.log(is_valid_email("jdoe42@gmail.com")); //# => false
console.log(is_valid_email("jdoegmail.com")   ); //# => false
console.log(is_valid_email("az@email")        ); //# => false
