
function reverseWords(arr) {
    let newArr = [];
    let str = "";
    //convert arr to string
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== " ") {
            str = str + arr[i];
        }
        //space mean new word so push str to newArr here and reset str to empty array
        //also need to push at the last index for the last word
        if (arr[i] === " " || i === arr.length-1) {
            newArr.push(str);
            str = "";
        } 
    }
    console.log(newArr);
    //move the whole word around
    let i = 0;
    let j = newArr.length - 1;
    while (i < j) {
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
        i++;
        j--;
    }
    //join to make a string with space between array (to add " " between words)
    //then split them into array
    //***cannot do arr = ... because it will not change outside this scope***
    arr = newArr.join(" ").split("");
    console.log(arr)
    return newArr.join(" ").split("");
}

let arr = [ 'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l'];
reverseWords(arr);
console.log(arr);