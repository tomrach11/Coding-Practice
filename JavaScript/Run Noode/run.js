
function solution(A) {
    var n = A.length;
    var result = 0;
    var i;

    //loop to make total adjacent counted
    for (i = 0; i < n - 1; i++) {
        if (A[i] == A[i + 1])
            result = result + 1;
    }
    //
    var r = -1;
    for (i = 0; i < n; i++) {
        var count = 0;
        if (i > 0) {                    //check if there any on the left
            if (A[i - 1] != A[i])       //see if current equal to left
                count = count + 1;
            else
                count = count - 1;
        }
        if (i < n - 1) {                //check if there is any on the right
            if (A[i + 1] != A[i])       //see if current equal to right
                count = count + 1;
            else
                count = count - 1;
        }
        r = Math.max(r, count);         //r does not need to change if count is less than r ex. if it already -1 count is -2 r should not change to -2
    }
    return result + r;
}

console.log(solution([0, 0, 1, 1])); // 2
console.log(solution([ 1, 1, 0, 1, 0, 0, 1, 1 ])); // 5
console.log(solution([ 1, 1, 1, 1, 1, 0, 1, 1 ])); // 7
console.log(solution([ 1, 0, 1])); // 2
console.log(solution([ 0, 1, 0])); // 2
console.log(solution([ 1, 1, 0, 0, 0])); // 4
console.log(solution([0])); // 0
console.log(solution([1, 1, 1])); // 1