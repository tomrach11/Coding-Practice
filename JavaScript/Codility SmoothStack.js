
function solution(A) {
    var n = A.length;
    var result = 0;
    var i;
    for (i = 0; i < n - 1; i++) {
        if (A[i] == A[i + 1])
            result = result + 1;
    }
    var r = -1;
    for (i = 0; i < n; i++) {
        var count = 0;
        if (i > 0) {
            if (A[i - 1] != A[i])
                count = count + 1;
            else
                count = count - 1;
        }
        if (i < n - 1) {
            if (A[i + 1] != A[i])
                count = count + 1;
            else
                count = count - 1;
        }
        r = Math.max(r, count);
    }
    return result + r;
}

console.log(solution([0, 0, 1, 1])); // 2
console.log(solution([ 1, 1, 0, 1, 0, 0, 1, 1 ])); // 5
console.log(solution([ 1, 1, 1, 1, 1, 0, 1, 1 ])); // 7
console.log(solution([ 1, 0, 1])); // 2
console.log(solution([ 0, 1, 0])); // 2
console.log(solution([ 1, 1, 0, 0, 0])); // 3
console.log(solution([0])); // 0
console.log(solution([1, 1, 1])); // 1