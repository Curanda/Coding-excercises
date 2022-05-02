// const bill = 450;
// const tip = bill <= 50 || bill >= 300 ? (bill * 0.2) : (bill * 0.15);
// console.log(bill);
// // bill < 50 || bill > 300 ? console.log(`0.2`) : console.log(`0.15`);
// console.log(tip);
// console.log(bill + tip);
// console.log(`The bill was ${bill} and the tip was ${tip} so the total value was ${bill + tip}`);


function calcTip(billValue) {
    if (50 <= billValue <= 300) {
    console.log(`The tip is : ` , (billValue * 0.15), `and the total is : ` , (billValue + 0.15 * billValue));
} else if (50 > billValue && billValue > 300) {
    console.log(`The tip is : ` , (billValue * 0.2) , `and the total is : ` , (billValue + 0.2 * billValue));
}
}

calcTip(305);

const billValue = [124, 555, 44];
const tips = [calcTip(billValue[0]), calcTip(billValue[1]), calcTip(billValue[2])];
const total = [(billValue[0] + tips[0]), (billValue[1] + tips[1]), (billValue[2] + tips[2])];

console.log(tips);
console.log(total);
