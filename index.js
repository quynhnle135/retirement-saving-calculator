function calculateSaving() {
  const p = parseFloat(document.getElementById("contribution").value);
  let r = parseFloat(document.getElementById("interest-rate").value);
  const curAge = parseInt(document.getElementById("current-age").value);
  const retirementAge = parseInt(
    document.getElementById("retirement-age").value
  );
  const t = retirementAge - curAge;
  r = r / 100 / 12;
  let a = Math.round(p * ((Math.pow(1 + r, 12 * t) - 1) / r) * 100) / 100;
  let result = a.toLocaleString("en-US");

  document.getElementById("result").innerText = `What you'll have: $${result}`;
}

function requireMonthlyContribution() {
  let r = parseFloat(document.getElementById("interest-rate-1").value);
  const a = parseFloat(document.getElementById("amount").value);
  const curAge = parseInt(document.getElementById("current-age-1").value);
  const retirementAge = parseInt(
    document.getElementById("retirement-age-1").value
  );
  let n = (retirementAge - curAge) * 12;
  r = r / 100 / 12;

  let p = Math.round(a * (r / (Math.pow(1 + r, n) - 1)) * 100) / 100;
  let result = p.toLocaleString("en-US");

  document.getElementById(
    "result-1"
  ).innerText = `Your monthly contribution should be: $${result}`;
}
