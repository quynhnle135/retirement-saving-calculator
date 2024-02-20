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

function requireMonthlyContribution(startAge, endAge, rate, expectedAmount) {
    let n = (endAge - startAge) * 12;
    r = (r / 100) / 12;
    let result = expectedAmount * (r / (Math.pow((1 + r), n) - 1));
    return Math.round(result * 100) / 100;
}

console.log("If you contribute $500 annually to your retirement savings account with a 5% APY, after 40 years, how much will you receive? " + calculateYearlyContribution(p=500, r=5, t=40));
console.log("If you contribute $500 each month to your retirement savings account with a 5% APY, after 40 years, how much will you receive? " + calculateMonthlyContribution(p=500, r=5, t=40));

console.log(requireMonthlyContribution(startAge=30, endAge=65, rate=5, expectedAmount=1000000)); // ~$880.21