const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// console.log(companies[8].end);

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//forEach

// companies.forEach(function(Company /*, index, companies*/) {
//   console.log(Company.name);
// });

//filter

//Get 21 and older

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(a) {
//   if (a >= 21) {
//     return true;
//   }
// });

//const canDrink = ages.filter(age => age >= 21);

//Filter the retail companies

// const retailCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(
//   company => company.category === 'Retail'
// );

//get 80s companies

// const eightiesCompanies = companies.filter(
//   company => company.start >= 1980 && company.start < 1990
// );

//Get companies that lasted 10 years or more

// const lastedTenYears = companies.filter(
//   company => company.end - company.start >= 10
// );

// console.log(lastedTenYears);

//map

//Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start}-${company.end}]`;
// });

// const testMap = companies.map(
//   company => `${company.name} [${company.start}-${company.end}]`
// );

// const agesSquareRoot = ages.map(age => Math.sqrt(age));
// const agesTimesTwo = ages.map(age => age * 2);

// console.log(agesSquareRoot);
// console.log(agesTimesTwo);

// const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

// console.log(ageMap);

//sort

//Sort companies by start year

// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1; //return any +ve no.
//   } else {
//     return -1; //return any -ve no.
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

//const sortedCompanies = companies.sort((a, b) => a.start - b.start);

//console.log(sortedCompanies);

//Sort ages

//const sortAges = ages.sort(); // It will sort as per the first digit (5 come in between 45 and 54)

//const sortAges = ages.sort((a, b) => a - b);

// const sortAges = ages.sort((a, b) => (a > b ? 1 : -1));

//console.log(sortAges);

//reduce

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

//const ageSum = ages.reduce((total, age) => total + age, 0);

//Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce(
//   (total, company) => total + company.end - company.start,
//   0
// );

//Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => (a > b ? 1 : -1))
  .reduce((a, b) => a + b, 0);

console.log(combined);
