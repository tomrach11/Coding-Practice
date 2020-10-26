// Simple

// You are given a non-empty list of integers (X). For this task, you should return a list consisting of only the non-unique elements in this list. To do so you will need to remove all unique elements (elements which are contained in a given list only once). When solving this task, do not change the order of the list. Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].
// Input: A list of integers.
// Output: An iterable of integers.

function nonUniqueElements(arr) {
    var newArr = [];
    for (var i1 = 0; i1 < arr.length; i1++) {
        for (var i2 = 0; i2 < arr.length; i2++) {
            if (arr[i1] == arr[i2] && i1 != i2) {
                newArr.push(arr[i1]);
                break;
            }
        }
    }
    return newArr;
}
console.log(nonUniqueElements([1, 2, 3, 1, 3]));        //[1, 3, 1, 3], "1st example");
console.log(nonUniqueElements([1, 2, 3, 4, 5]));        //, [], "2nd example");
console.log(nonUniqueElements([5, 5, 5, 5, 5]));        //, [5, 5, 5, 5, 5], "3rd example");
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]));  //, [10, 9, 10, 10, 9], "4th example");

//Longest Repeat
function longRepeat(line) {
    var longest = 0;
    var count = 1;
    for (var i = 0; i < line.length; i++) {
        if (line[i] == line[i + 1]) {
            console.log(line[i] + " " + line[i+1]);
            count++;
        }
        else if (count > longest){
            longest = count;
            count = 1;
        }
        else {
            count = 1;
        }
    }
    return longest;
}
console.log(longRepeat('sdsffffse'));         //4, "First")
console.log(longRepeat('ddvvrwwwrggg'));      //3, "Second")

//Convert Number to Roman
function romanNumerals(number) {
    var arrNumber = number.toString().split("").reverse();
    var arr = [];
    var arr1 = [["I", "V", "X"], ["X", "L", "C"], ["C", "D", "M"], ["M"]];
    for (var i = 0; i < arrNumber.length; i++) {
            var newWord = addLetter(arr1[i], Number(arrNumber[i]));
            arr.unshift(newWord);
    }
    return arr.join("");
}
function addLetter(arr, number) {
    var str = "";
    for (var i = 1; i <= number ; i++) {
        if (i <= 3) {
            str += arr[0];
        }
        else if (i == 4) {
            str = arr[0] + arr[1];
        }
        else if (i == 5) {
            str = arr[1];
        }
        else if (i >= 6 & i <= 8) {
            str += arr[0];
        }
        else if (i == 9) {
            str = arr[0] + arr[2];
        }
    }
    return str;
}
console.log(romanNumerals(6));  //'VI', "First"
console.log(romanNumerals(76));  //'LXXVI', "Second"
console.log(romanNumerals(499));  //'CDXCIX', "Third"
console.log(romanNumerals(3888));  //'MMMDCCCLXXXVIII', "Forth"

//Most Wanted Data
// You are given a text, which contains different english letters and punctuation symbols. You should find the most frequent letter in the text. The letter returned must be in lower case.
// While checking for the most wanted letter, casing does not matter, so for the purpose of your search, "A" == "a". Make sure you do not count punctuation symbols, digits and whitespaces, only letters.
// If you have two or more letters with the same frequency, then return the letter which comes first in the latin alphabet. For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".
function mostWanted(str) {
    str = str.toLowerCase(str);
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var result = "";
    var count = 0;
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        obj[str[i]] = 0;
    }
    for (i = 0; i < str.length; i++) {
        obj[str[i]] += 1;
    }
    for (var ele in obj) {
        if (obj[ele] > count && alphabet.includes(ele)) {
            count = obj[ele];
            result = ele;
        }
        if (obj[ele] == count && alphabet.includes(ele) && alphabet.indexOf(ele) < alphabet.indexOf(result)) {
            count = obj[ele];
            result = ele;
        }
    }
    return result;
}
console.log(mostWanted("Hello World!")); //"l", "1st example");
console.log(mostWanted("How do you do?")); //"o", "2nd example");
console.log(mostWanted("One")); //"e", "3rd example");
console.log(mostWanted("Oops!")); //"o", "4th example");
console.log(mostWanted("AAaooo!!!!")); //"a", "Letters");

// A median is a numerical value separating the upper half of a sorted array of numbers from the lower half. In a list where there are an odd number of entities, the median is the number found in the middle of the array. If the array contains an even number of entities, then there is no single middle value, instead the median becomes the average of the two numbers found in the middle. For this mission, you are given a non-empty array of natural numbers (X). With it, you must separate the upper half of the numbers from the lower half and find the median.
function median(arr) {
    var newArr = arr.sort(function (a,b) {return a-b;});
    var result;
    if (arr.length % 2 != 0) {
        result = newArr[Math.floor(newArr.length/2)];
        return result;
    }
    else {
        var middle = newArr.length / 2;
        result = (newArr[middle] + newArr[middle-1]) / 2;
        return result;
    }
}
console.log(median([1, 2, 3, 4, 5]));   //3, "1st example");
console.log(median([3, 1, 2, 5, 3]));   //3, "2nd example");
console.log(median([1, 300, 2, 200, 1]));   //2, "3rd example");
console.log(median([3, 6, 20, 99, 10, 15]));   //12.5, "4th example");

//In cellular automata, the Moore neighborhood comprises the eight cells surrounding a central cell on a two-dimensional square lattice. The neighborhood is named after Edward F. Moore, a pioneer of cellular automata theory. Many board games are played with a rectangular grid with squares as cells. For some games, it is important to know about the conditions of neighbouring cells for chip (figure, draught etc) placement and strategy.
// You are given a state for a rectangular board game grid with chips in a binary matrix, where 1 is a cell with a chip and 0 is an empty cell. You are also given the coordinates for a cell in the form of row and column numbers (starting from 0). You should determine how many chips are close to this cell. Every cell interacts with its eight neighbours; those cells that are horizontally, vertically, or diagonally adjacent.
// For the given examples (see the schema) there is the same grid:
// [[1, 0, 0, 1, 0],
//  [0, 1, 0, 0, 0],
//  [0, 0, 1, 0, 1],
//  [1, 0, 0, 0, 0],
//  [0, 0, 1, 0, 0]]
// For the first example coordinates of the cell is (1, 2) and as we can see from the schema this cell has 3 neighbour chips. For the second example coordinates is (0, 0) and this cell contains a chip, but we count only neighbours and the answer is 1.
function countNeighbours(data, row, col) {
    var count = 0;
    var firstRow, lastRow, firstCol, lastCol;
    if (row - 1 < 0) {
        firstRow = 0;
    }
    else {
        firstRow = row - 1;
    }
    if (col - 1 < 0) {
        firstCol = 0;
    }
    else {
        firstCol = col - 1;
    }

    if (row + 1 > data.length - 1) {
        lastRow = data.length - 1;
    }
    else {
        lastRow = row + 1;
    }
    if ( col + 1 > data.length - 1) {
        lastCol = data.length - 1;
    }
    else {
        lastCol = col + 1;
    }
    for (var i1 = firstRow; i1 <= lastRow; i1++) {
        for (var i2 = firstCol; i2 <= lastCol; i2++) {
            if ( data[i1][i2] == 1 && !(i1 == row && i2 == col)) {
                count += 1;
            }
        }
    }
    return count;
}
console.log(countNeighbours([ [1, 0, 0, 1, 0],
                              [0, 1, 0, 0, 0],
                              [0, 0, 1, 0, 1],
                              [1, 0, 0, 0, 0],
                              [0, 0, 1, 0, 0]], 1, 2));  // 3, "1st example");
console.log(countNeighbours([ [1, 0, 0, 1, 0],
                              [0, 1, 0, 0, 0],
                              [0, 0, 1, 0, 1],
                              [1, 0, 0, 0, 0],
                              [0, 0, 1, 0, 0]], 0, 0));  // 1, "2nd example");
console.log(countNeighbours([ [1, 1, 1],
                              [1, 1, 1],
                              [1, 1, 1]], 0, 2));  // 3, "Dense corner");

console.log(countNeighbours([ [0, 0, 0],
                              [0, 1, 0],
                              [0, 0, 0]], 1, 1));  // 0, "Single");

// While traveling, the spaceship endures quite a lot of stress. As a result, an important part of the maintenance is to check the outer hull. Stephan uses a digital durabilitimeter for this task. The device scans a portion of the spaceships hull and gives a durability map that is divided by small square fragments with measurements. Sometimes Stephan does not have much time and he can patch only couple points, so we need an algorithm to find the weak points.
//
// The durability map is represented as a matrix with digits. Each number is the durability measurement for the cell. To find the weakest point we should find the weakest row and column. The weakest point is placed in the intersection of these rows and columns. Row (column) durability is a sum of cell durability in that row (column). You should find coordinates of the weakest point (row and column). The first row (column) is 0th row (column). If a section has several equal weak points, then choose the top left point.
function weakPoint(matrix){
    var rowSum = [];
    var colSum = [];
    var i1;
    var i2;
    for (i1 = 0; i1 < matrix.length; i1++) {
        var sum1 = 0;
        var sum2 = 0;
        for (i2 = 0; i2 < matrix[0].length; i2++) {
            sum1 += matrix[i1][i2];
            sum2 += matrix[i2][i1];
        }
        rowSum.push(sum1);
        colSum.push(sum2);
    }
    var maxSum = rowSum[0] + colSum[0];
    var result = [0,0];
    for (i1 = 0; i1 < rowSum.length; i1++) {
        for(i2 = 0; i2 < colSum.length; i2++) {
            var sum = rowSum[i1] + colSum[i2];
            if (sum < maxSum) {
                maxSum = sum;
                result = [i1, i2];
            }
        }
    }
    return result;
}
console.log(weakPoint([ [7, 2, 7, 2, 8],
                        [2, 9, 4, 1, 7],
                        [3, 8, 6, 2, 4],
                        [2, 5, 2, 9, 1],
                        [6, 6, 5, 4, 5]]
                        ));// [3, 3], "Example");
console.log(weakPoint([ [7, 2, 4, 2, 8],
                        [2, 8, 1, 1, 7],
                        [3, 8, 6, 2, 4],
                        [2, 5, 2, 9, 1],
                        [6, 6, 5, 4, 5]]
                        ));// [1, 2], "Two weak point");

console.log(weakPoint([ [1, 1, 1],
                        [1, 1, 1],
                        [1, 1, 1]]
                        ));// [0, 0], "Top left");
