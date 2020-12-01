function cafeOrderChecker(takeOutOrders, dineInOrders, servedOrders) {
    //check first servedOrder if there any match with first order from 2 arrays
    let i1 = 0;
    let i2 = 0;
    for(let i = 0; i < servedOrders.length; i++) {
        console.log (i1 + "-" + arr[i1] + " " + i2)
        if (takeOutOrders[i1] !== servedOrders[i] && dineInOrders[i2] !== servedOrders[i]) {
            return false;
        }
        if (i1 < takeOutOrders.length && takeOutOrders[i1] === servedOrders[i]) {
            i1++;
        }
        if (i2 < dineInOrders.length && dineInOrders[i2] === servedOrders[i]) {
            i2++;
        }
    }
    return true;
}

let takeOutOrders = [1, 3, 5];
let dineInOrders = [2, 4, 6];
let servedOrders = [1, 2, 4, 6, 5, 3];
console.log(cafeOrderChecker(takeOutOrders, dineInOrders, servedOrders));

takeOutOrders = [17, 8, 24];
dineInOrders = [12, 19, 2];
servedOrders = [17, 8, 12, 19, 24, 2];
console.log(cafeOrderChecker(takeOutOrders, dineInOrders, servedOrders));