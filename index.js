// function calculateSavingByYears(p, r, t) {
//     r = r / 100;
//     return p * Math.pow((1 + r), t);
// }

function calculateSavingByMontlyContribution(p, r, t) {
    r = (r / 100) / 12;
    return p * ((Math.pow((1 + r), 12 * t) - 1) / r);
}

function calculateSaving() {
    const p = parseFloat(document.getElementById('contribution').value);
    const r = parseFloat(document.getElementById('interest-rate').value);
    const curAge = parseInt(document.getElementById('current-age').value);
    const retirementAge = parseInt(document.getElementById('retirement-age').value);
    const t = retirementAge - curAge;

    let result = calculateSavingByMontlyContribution(p, r, t);
    
    document.getElementById('result').innerText = `Future Value: $${result.toFixed(2)}`;
}
