/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
var inputs = readline().split(' ');

// var inputs;
// try {
//     inputs = readline().split(' ');
// } catch (err) {
//     inputs = [N];
// }

for (let i = 0; i < N; i++) {
    const t = parseInt(inputs[i]);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
function lowTemp (temps) {
    // let result = temps[0]
    let result = 99999;
    for (let i = 0; i < temps.length; i++) {
        let temp = temps[i]

        let posTemp = Math.abs(temp)
        let posResult = Math.abs(result)

        console.error (posTemp + ":" + posResult)
        if (posTemp < posResult || posTemp == posResult) {
            if (posTemp == posResult) {
                result = temp > result ? temp : result;
            }
                result = temp
        }
    }
    return result
}

console.log(lowTemp(inputs));



// Read inputs from Standard Input (use readline()).
// Write outputs to Standard Output (use print()).

var n = readline();

let result = readline();

// for (var i = 0; i < n-1; i++) {
//     let time = readline();
//     if (result > time) {
//         result = time;
//     }
// }



for (var i = 0; i < n-1; i++) {
    let timestr = readline();
    let time = timestr.split(':');
    let smallest =  result.split(':');
    if (smallest[0] > time[0]) {
        result = timestr;
    } else if (smallest[0] === time[0]) {
        if (smallest[1] > time[1]) {
            result = timestr;
        } else if (smallest[1] === time[1]) {  
            if (smallest[1] > time[1]) {
                result = timestr;
            } 
        }
    }
}


console.log(result);

