function calculateSavingByYears(p, r, t) {
    r = r / 100;
    return p * Math.pow((1 + r), t);
}

function calculateSaving() {
    const p = parseFloat(document.getElementById('deposit-amount').value);
    const r = parseFloat(document.getElementById('interest-rate').value);
    const t = parseInt(document.getElementById('years').value);
    let result = calculateSavingByYears(p, r, t);
    
    document.getElementById('result').innerText = `Future Value: $${result.toFixed(2)}`;
}
