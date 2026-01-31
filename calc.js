function calculateEV() {
  const ebitda = parseFloat(document.getElementById("ebitda").value);
  const disruption = parseFloat(document.getElementById("disruption").value) / 100;

  const baseMultiple = 6;
  const riskMultiple = 5;

  const normalizedEBITDA = ebitda * (1 - disruption);
  const evBase = ebitda * baseMultiple;
  const evRisk = normalizedEBITDA * riskMultiple;

  const evAtRisk = evBase - evRisk;

  document.getElementById("output").innerText =
    "Enterprise Value at Risk: $" + evAtRisk.toLocaleString();
}
