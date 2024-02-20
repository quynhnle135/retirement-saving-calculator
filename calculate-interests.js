// If you contribute $500 annually to your retirement savings account with a 5% APY, after 40 years, how much will you receive? 
function calculateYearlyContribution(p, r, t) {
    r = Math.round((r / 100) * 100) / 100;
    let a = Math.round((p * Math.pow((1 + r), t)) * 100) / 100;
    return a;
}

// // If you contribute $500 each month to your retirement savings account with a 5% APY, after 40 years, how much will you receive? 
function calculateMonthlyContribution(p, r, t) {
    r = Math.round(((r / 100) / 12) * 1000) / 1000;
    console.log(r)
    let a = Math.round((p * ((Math.pow((1 + r), 12 * t) - 1) / r)) * 100) / 100;
    return a;
}

console.log("If you contribute $500 annually to your retirement savings account with a 5% APY, after 40 years, how much will you receive? " + calculateYearlyContribution(p=500, r=5, t=40));
console.log("If you contribute $500 each month to your retirement savings account with a 5% APY, after 40 years, how much will you receive? " + calculateMonthlyContribution(p=500, r=5, t=40));


// function calculateRetirementSavingYearly(startAge, endAge, p, r) {
//     let t = endAge - startAge;
//     let a = Math.round((p * Math.pow((1 + r), t)) * 100) / 100;
//     return a;
// }

// function calculateRetirementSavingMonthly(startAge, endAge, p, r) {

// }

// put $500 into the bank account every YEAR, starting from 25yo and the rate is 5%/year, how much they receive when they're 65yo
// console.log(calculateRetirementSavingYearly(startAge=25, endAge=65, p=500, t=0.05));
