//brackets
function brackets(expression){
    var brackets = "()[]{}";
    var strBrackets = "";
    var i = 0;
    for (i = 0; i < expression.length ; i++) {
        if (brackets.includes(expression[i])) {
            strBrackets += expression[i];
        }
    }
    while (strBrackets != deleteBracket(strBrackets)) {
        strBrackets = deleteBracket(strBrackets);
    }
    if (strBrackets == "") {
        return true;
    }
    else return false;
}

function deleteBracket(str) {
    var brackets = "()[]{}";
    for (var i = 0; i < str.length ; i++) {
        var open = brackets.indexOf(str[i]);
        var close = brackets.indexOf(str[i + 1]);
        if (open == close - 1) {
            return str.slice(0, i) + str.slice(i + 2, str.length);
        }
    }
    return str;
}
console.log (brackets("((5+3)*2+1)")); //true, "Simple");
console.log (brackets("{[(3+1)+2]+}")); //true, "Different types");
console.log (brackets("(3+{1-1)}")); //false, ") is alone inside {}");
console.log (brackets("[1+1]+(2*2)-{3/3}")); //true, "Different operators");
console.log (brackets("(({[(((1)-2)+3)-3]/3}-3)")); //false, "One is redundant");
console.log (brackets("2+3"));// true, "No brackets, no problem");

//using replace
// function brackets(expression){
//     let brts = expression.replace(/[*+-/\d]/g, ''),
//         reg = /\{\}|\(\)|\[\]/;
//     while (reg.test(brts)) {
//         brts = brts.replace(reg, '');
//     }
//    return !brts;
// }

//time converter 24hr to 12hr
function timeConverter(dayTime) {
    var arr = dayTime.split(":");
    var hour = arr[0];
    var minute = arr[1];
    var newTime = "";
    if (hour[0] == 0) {
        hour = hour[1];
    }
    if (hour > 12) {
        hour = hour - 12;
        newTime = hour + ":" + minute + " p.m.";
    }
    else if (hour == 12) {
        newTime = hour + ":" + minute + " p.m.";
    }
    else if (hour == 0) {
        newTime = "12" +  ":" + minute + " a.m.";
    }
    else {
        newTime = hour + ":" + minute + " a.m.";
    }
    return newTime;
}
console.log(timeConverter('12:30'));//'12:30 p.m.')
console.log(timeConverter('09:00'));//'9:00 a.m.')
console.log(timeConverter('23:15'));//'11:15 p.m.')

//Ascending List
function isAscending(items) {
    for (var i = 0; i < items.length; i++) {
        if (items[i] > items[i+1] || items[i] == items[i+1]) {
            return false;
        }
    }
    return true;
}
console.log(isAscending([-5, 10, 99, 123456])); // true)
console.log(isAscending([99])); // true)
console.log(isAscending([4, 5, 6, 7, 3, 7, 9])); // false)
console.log(isAscending([])); // true)
console.log(isAscending([1, 1, 1, 1])); // false)

//simple area
function simpleAreas(...args) {
    if (args.length == 1) {
        return Math.PI * ( (args[0]/2) * (args[0]/2) );
    }
    else if (args.length == 2) {
        return args[0] * args[1];
    }
    else if (args.length == 3) {
        var s = (args[0] + args[1] + args[2])/2;
        return Math.sqrt(s * (s - args[0]) * (s - args[1]) * (s - args[2]));
    }
}
console.log((simpleAreas(3))); // 7.07)
console.log((simpleAreas(2, 2))); // 4)
console.log((simpleAreas(2, 3))); // 6)
console.log((simpleAreas(3, 5, 4))); // 6)
console.log((simpleAreas(1.5, 2.5, 2))); // 1.5)

//find interval
//This need to be fix (should have sort it first then dont need to find new start)
function createIntervals(data) {
    var newArr = [];
    var start = Math.min(...data);
    var end = 0;
    var max = Math.max(...data);
    var i = start;
    while (i <= max) {
        //find end of interval
        while  ( data.includes(i + 1) && i <= max) {
            i++;
        }
        end = i;
        newArr.push([start, end]);
        i++;
        //find new start
        while ( !data.includes(i) && i <= max ) {
            i++;
        }
        start = i;
    }
    return newArr;
}
console.log(createIntervals([1, 2, 3, 4, 5, 7, 8, 12])); // [[1, 5], [7, 8], [12, 12]], "First")
console.log(createIntervals([1, 2, 3, 6, 7, 8, 4, 5])); // [[1, 8]], "Second")

//Double substring
function doubleSubstring(line) {
    var count = 0;
    for (var i = 0; i < line.length; i++) {
        for (var j = 1; j < line.length; j++ ) {
            if (i > j) {
                tempString = line.slice(i, j + 1);
                if (line.includes(tempString)) {

                }
            }
        }
    }
}

console.log(doubleSubstring('aaaa'));// 2, "First")
console.log(doubleSubstring('abc'));// 0, "Second")
console.log(doubleSubstring('aghtfghkofgh'));// 3, "Third")




//super root
function superRoot(number) {

}
console.log(superRoot(4)); //2
console.log(superRoot(9)); //3
console.log(superRoot(81)); //3.504339593597054
