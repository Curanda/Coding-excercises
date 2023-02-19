/* iterates through an array, prints with template strings all the elements fo the array */

let arr = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arg) {
  let string1 = [];
  for (let i = 0; i < arg.length; i++) {
    let days = i + 1;
    let temperature = arg[i];
    string1.push(`${temperature} deg in ${days} days`);
  }
  console.log(`... ` + string1.join(" ... "));
};

printForecast(arr);

printForecast(arr2);
