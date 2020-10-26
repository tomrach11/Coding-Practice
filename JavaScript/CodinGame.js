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
