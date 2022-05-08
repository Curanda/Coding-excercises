const populations = [38, 45, 34, 12];
const percentages2 = [];

for(let i = 0; i < populations.length; i++) {
    percentages2.push((populations[i] / 7900) * 100);
};

console.log(percentages2);
