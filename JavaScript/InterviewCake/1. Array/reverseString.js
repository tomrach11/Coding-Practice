function reverseString(arr) {
    //set index start from beginning and ending
    let j = arr.length - 1;
    let i = 0;
    while (i < j) {
        //save first word so it can saved to ending spot
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
let arr = ['h', 'e', 'l', 'l', 'o', '!'];
reverseString(arr);
console.log (arr);