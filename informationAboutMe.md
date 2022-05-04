const michaelArray = [
    `Michael`,
    `Kuranda`,
    2022 - 1985,
    `tour guide`,
    [Sonia, Lukasz, Piotrek]
];

const michael = {
    firstName: `Michael`,
    lastName: `Kuranda`,
    age: 2022 - 1985,
    job: `tour guide`,
    wife: `Anna`,
    friends: [`Sonia` , `Lukasz`, `Piotrek`],
};

console.log(michael);

console.log(michael.lastName);
console.log(michael[`lastName`]);

const nameKey = `Name`;
console.log(michael[`first` + nameKey]);
console.log(michael[`last` + nameKey]);

console.log(michael.`last` + nameKey)

const interestedIn = prompt(`What do you want to know about Michael? Choose between firstName, lastName, age, job, and friends`);
console.log(michael[interestedIn]);



michael.location = `Iceland`;
michael[`companyName`] = `Nordic Gentleman`;
console.log(michael);

if(michael[interestedIn]) {
    console.log(michael[interestedIn]);
} else (
    console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`)
);

console.log(michael.firstName, `has`, michael.friends.length, `friends and his best friend is called` , michael.friends[0]);
