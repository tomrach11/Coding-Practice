function mergeSortedArrays(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    let n = arr1.length + arr2.length;
    let result = [];

    for(let i = 0; i < n; i++) {
        //make sure there are still number in arr1 and there is nothing to compare to arr2
        if (index1 < arr1.length && index2 >= arr2.length ||
            arr1[index1] < arr2[index2]) {
                result.push(arr1[index1]);
                index1++;
            } else {
                result.push(arr2[index2]);
                index2++;
        }
    }

    return result;
}

console.log(mergeSortedArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19, 43, 56, 67]))
console.log(mergeSortedArrays([1, 5, 8, 12, 14, 19, 43, 56, 67], [3, 4, 6, 10, 11, 15]))