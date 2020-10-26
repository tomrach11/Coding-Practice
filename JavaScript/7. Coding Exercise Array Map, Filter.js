//Array.map

// Map By Name
// Write a method map_by_name  that takes in an array of hashes and returns a new array containing the names of each hash.
function map_by_name(arr) {
    var arrNew = [];
    arrNew = arr.map(function(obj){
        return obj.name;
    });
    return arrNew;
}
pets = [
  {"type":"dog", "name":"Rolo"},
  {"type":"cat", "name":"Sunny"},
  {"type":"rat", "name":"Saki"},
  {"type":"dog", "name":"Finn"},
  {"type":"cat", "name":"Buffy"}
];
console.log(map_by_name(pets)); //#: ["Rolo", "Sunny", "Saki", "Finn", "Buffy"]
countries = [
 {"name":"Japan", "continent":"Asia"},
 {"name":"Hungary", "continent":"Europe"},
 {"name":"Kenya", "continent":"Africa"},
];
console.log(map_by_name(countries)); //#: ["Japan", "Hungary", "Kenya"]

// Map By Key
// Write a method map_by_key that takes in an array of hashes and a key string. The method should returns a new array containing the values from each hash for the given key.
function map_by_key(arr, key) {
    var newArr = [];
    newArr = arr.map(function(obj){
        return obj[key];
    });
    return newArr;
}
locations = [
  {"city":"New York City", "state":"New York", "coast":"East"},
  {"city":"San Francisco", "state":"California", "coast":"West"},
  {"city":"Portland", "state":"Oregon", "coast":"West"},
];
console.log(map_by_key(locations, "state")); // #: ["New York", "California", "Oregon"]
console.log(map_by_key(locations, "city") ); //#: ["New York City", "San Francisco", "Portland"]

// Yell Sentence
// Write a method yell_sentence that takes in a sentence string and returns a new sentence where every word is yelled. See the examples. Use map to solve this.
function yell_sentence(sent) {
    var arr = sent.split(" ");
    var newArr = arr.map(function(ele){
        return ele.toUpperCase() + "!";
    });
    return newArr.join(" ");
}
console.log(yell_sentence("I have a bad feeling about this")); //#: "I! HAVE! A! BAD! FEELING! ABOUT! THIS!"

// Whisper Words
// Write a method whisper_words that takes in an array of words and returns a new array containing a whispered version of each word. See the examples. Solve this using map :).
function whisper_words(words) {
    return words.map(function(ele){
        return ele.toLowerCase() + "...";
    });
}
console.log(whisper_words(["KEEP", "The", "NOISE", "down"])); //# : ["keep...", "the...", "noise...", "down..."]

//Array.filter

// O Words
// Write a method o_words that takes in a sentence string and returns an array of the words that contain an "o". Use select in your solution!
function o_words(str) {
    var arr = str.split(" ");
    return arr.filter(function(ele){
        return ele.includes("o");
    });
}
console.log(o_words("How did you do that?")); //#: ["How", "you", "do"]
