function mutateTheArray(n, a) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        let first;
        let second;
        (i - 1 < 0) ? first = 0 : first = parseInt([i - 1]);
        (i + 1 > n - 1) ? third = 0 : third = parseInt(a[i + 1]);
        let sum = first + a[i] + third;
        b.push(sum);
    }
    return b;
}


function countTinyPairs(a, b, k) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        let first = a[i].toString();
        let second = b[(b.length - 1) - i].toString();
            let sum = first + second;
            if (parseInt(sum) < k) count++;
    }
}

function meanGroup(a) {
    let meanArr = [];
    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        for (let j = 0; j < a[i].length; j++) {
            sum += a[i][j];
        }
        let mean = sum/a[i].length;
        meanArr.push(mean);
    }

    let obj = new Object();
    for (let i = 0; i < meanArr.length; i++) {
        let x = meanArr[i]
        obj[x] = 0;
    }

    let result = [];
    for (let key in obj) {
        let temp = [];
        for (let i = 0; i < meanArr.length; i++) {
            let num = meanArr[i];
            if (key == num) {
                temp.push(i);
            }
        }
        result.push(temp)
    }
    return result;
}