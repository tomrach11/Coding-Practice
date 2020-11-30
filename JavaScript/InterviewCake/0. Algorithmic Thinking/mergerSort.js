function mergeSort(array) {
    
    //base case
    if (array.length <= 1) {
        return array;
    } 

    //find mid index
    let midIndex = array.length/2

    //make left and right arrays
    let leftArray = array.slice(0, midIndex);
    let rightArray = array.slice(midIndex, array.length);

    //use merger sort on left and right array to make recursion
    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    console.log(leftArray);
    console.log(rightArray)

    //put 2 array back together
    let mergeArray = [];

    let leftIndex = 0;
    let rightIndex = 0;

    for(let i = 0; i < array.length; i++) {
        //if there are any number still in leftArray and nothing in right Array then add everything from left Array
        if (leftIndex < leftArray.length && rightIndex >= rightArray.length ||  
            //compare number from left and right array and put less one in mergeArray
            leftArray[leftIndex] < rightArray[rightIndex]) {
                mergeArray.push(leftArray[leftIndex]);
                leftIndex++;
        } else {
            mergeArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    console.log(mergeArray)
    return mergeArray;
}


console.log(mergeSort([8,1,5,9,2,0]));