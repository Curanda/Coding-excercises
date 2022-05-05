const myCountry = {
    country: `Iceland`,
    capital: `Reykjavik`,
    language: `Icelandic`,
    population: 375000,
    neighbours: 0,
    describe: function() {
        return `${this.country} has ${this.population} people, ${this.neighbours} neighbours and it's language is ${this.language}`;
    },
    checkIsland: function() {
        myCountry.isIsland = 1;
        return this.neighbours ? (this.isIsland === 0) : (this.isIsland === 1);
    },
};

console.log(myCountry.describe());

console.log(myCountry.population);

console.log(`${myCountry.country} has ${myCountry.population} people, ${myCountry.neighbours} neighbours and it's language is ${myCountry.language}`);

console.log(`${myCountry.country} is an island : ${myCountry.checkIsland()}`);
