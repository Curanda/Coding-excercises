const michael = {
    firstName: `Michael`,
    lastName: `classified!`,
    age: 2022 - 1989,
    job: `diver`,
    friends: [`Steven` , `Tara`, `Elizabeth`],
};

const interestedIn = prompt(`What do you want to know about Michael? Choose between firstName, lastName, age, job, and friends`);

if(michael[interestedIn]) {
//     console.log(michael[interestedIn]);
// } else (
//     console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`)
// );
