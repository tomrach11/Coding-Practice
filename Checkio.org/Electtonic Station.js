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
