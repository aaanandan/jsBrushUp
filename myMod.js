const companies = [
    {
        name: "Company one",
        category: "Finance",
        start: 1981,
        end: 2003
    },
    {
        name: "Company two",
        category: "Retail",
        start: 1981,
        end: 2003
    },
    {
        name: "Company three",
        category: "Auto",
        start: 1990,
        end: 2005
    },
    {
        name: "Company four",
        category: "Reatail",
        start: 1970,
        end: 2003
    },
    {
        name: "Company five",
        category: "Technology",
        start: 1981,
        end: 2003
    },
    {
        name: "Company six",
        category: "Auto",
        start: 1981,
        end: 2003
    },
    {
        name: "Company seven",
        category: "Finance",
        start: 1981,
        end: 2003
    },
    {
        name: "Company eight",
        category: "Retail",
        start: 1981,
        end: 2003
    },
    {
        name: "Company nine",
        category: "Finance",
        start: 1981,
        end: 2003
    },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }

companies.forEach(element => {
    console.log(element.name);
});


const matured = ages.filter(age => age >= 21);
console.log(matured);

const reatiler = companies.filter(company => company.category === 'Retail');
console.log(reatiler);

const eighties = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(eighties);

const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
console.log('10+', lastedTenYears);

const companyNames = companies.map(company => `${company.name} Started : ${company.start}`);
console.log(companyNames);

const agesSqaureRoot = ages.map(age => Math.sqrt(age));
console.log('agesSqaureRoot', agesSqaureRoot);

const agesTimes2 = ages.map(age => age * 2);
console.log('agesTimes2', agesTimes2);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);

//sort  
const sortedCompanies = companies.sort((c1, c2) => {
    if (c1.start > c2.start) return 1; else return -1;
});
console.log('sortedCompanies', sortedCompanies);

const sortAges = ages.sort((a, b) => a - b);
console.log('sortAges', sortAges);

let ageSum = ages.reduce((total, age) => total = total + age);
console.log('ageSum', ageSum)

const totalYears = companies.reduce((total, c1) =>
    total += c1.end - c1.start, 0);
console.log(totalYears);

const combined = ages.map(age => age * 2)
    .filter(age => age >= 40)
    .reduce((total, age) => total = total + age);
console.log('combined', combined);
