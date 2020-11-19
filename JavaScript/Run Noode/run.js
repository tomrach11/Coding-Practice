
// Last Index
// Write a method last_index that takes in a string and a character. 
//The method should return the last index where the character can be found in the string.
function last_index(str, char) {
    //loop from back
    //find the index of the letter
    //return it

    for (let i = str.length; i >= 0; i--) {
        if (str[i] === char) {
            return i;
        }
    }

}
console.log(last_index("abca", "a")       ); //#=> 3
console.log(last_index("mississipi", "i") ); //#=> 9
console.log(last_index("octagon", "o")    ); //#=> 5
console.log(last_index("programming", "m")); //#=> 7