// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let highest = 0;
    let length = Math.floor(arr.length/2);
    
    for(let i = 0; i <= length; i++) {
        for(let j = 0; j <= length; j++) {
            let sumRoll1 = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            let sumRoll2 = arr[i+1][j+1];
            let sumRoll3 = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            let sum = sumRoll1 + sumRoll2 + sumRoll3;
            (i === 0 && j === 0) ? hightest = sum : 0;
            (sum > highest) ? highest = sum : 0;
            console.error(sum + " " + highest);
        }
    }
    return highest;
}
let arr = [[-1, -1, 0, -9, -2, ,-2],
            [-2, -1, -6, -8, -2, -5],
            [-1, -1, -1, -2, -3, -4],
            [-1, -9, -2, -4, -4, -5],
            [-7, -3, -3, -2, -9, -9],
            [-1, -3, -1, -2, -4, -5]];
console.log(hightest(arr));