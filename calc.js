//V6 Code//

function calculateEV() {
  const ebitda = parseFloat(document.getElementById("ebitda").value) * 1_000_000;
  let disruption = parseFloat(document.getElementById("baseline").value) / 100;

  let explanation = `Baseline risk: ${document.getElementById("baseline").value}%`;
  const bullets = [];

  if(document.getElementById("opsRisk").checked) {
    disruption += 0.07;
    bullets.push("Operations add‑on: +7%");
    explanation += " ; +Ops";
  }
  if(document.getElementById("clientRisk").checked) {
    disruption += 0.10;
    bullets.push("Client concentration add‑on: +10%");
    explanation += " ; +Clients";
  }
  if(document.getElementById("keyRisk").checked) {
    disruption += 0.10;
    bullets.push("Key personnel add‑on: +10%");
    explanation += " ; +Key Personnel";
  }

  // Update explanation text
  document.getElementById("explanation").innerText = explanation;

  // Render bullet list dynamically (checkbox add-ons)
  const bulletContainer = document.getElementById("riskBullets");
  bulletContainer.innerHTML = "";
  bullets.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    bulletContainer.appendChild(li);
  });

  // Only calculate and display EV after clicking Calculate
  const baseMultiple = 6;
  const riskMultiple = 5;
  const normalizedEBITDA = ebitda * (1 - disruption);
  const evBase = ebitda * baseMultiple;
  const evRisk = normalizedEBITDA * riskMultiple;
  const evAtRisk = evBase - evRisk;

  // Show EV result
  document.getElementById("output").innerHTML =
    `<div style="font-weight:bold; margin-top:10px;">Enterprise Value at Risk: $${evAtRisk.toLocaleString()}</div>`;
}








//V4 Code//

// function calculateEV() {
//   const ebitda = parseFloat(document.getElementById("ebitda").value) * 1_000_000;
//   let disruption = parseFloat(document.getElementById("baseline").value) / 100;

//   let explanation = `Baseline risk: ${document.getElementById("baseline").value}%`;

//   if(document.getElementById("opsRisk").checked) {
//     disruption += 0.07;
//     explanation += "; +Ops";
//   }
//   if(document.getElementById("clientRisk").checked) {
//     disruption += 0.10;
//     explanation += "; +Clients";
//   }
//   if(document.getElementById("keyRisk").checked) {
//     disruption += 0.10;
//     explanation += "; +Key Personnel";
//   }

//   document.getElementById("explanation").innerText = explanation;

//   const baseMultiple = 6;
//   const riskMultiple = 5;

//   const normalizedEBITDA = ebitda * (1 - disruption);
//   const evBase = ebitda * baseMultiple;
//   const evRisk = normalizedEBITDA * riskMultiple;
//   const evAtRisk = evBase - evRisk;

//   // Breakdown amounts
//   const keyAmt = Math.round((0.12 * disruption * evBase)/1000);
//   const opsAmt = Math.round((0.06 * disruption * evBase)/1000);
//   const clientAmt = Math.round((0.02 * disruption * evBase)/1000);

//   document.getElementById("output").innerHTML =
//     `<div style="font-weight:bold; margin-top:10px;">Enterprise Value at Risk: $${evAtRisk.toLocaleString()}</div>
//      <div class="risk-bar" style="width:100%; background:#336633;"></div>
//      <div class="risk-bar" style="width:100%; background:#66CC66;"></div>
//      <div class="risk-bar" style="width:100%; background:#CCAA33;"></div>
//      <div class="risk-labels">
//        <div><strong>Key Personnel Risk:</strong> $${keyAmt}K</div>
//        <div><strong>Operational Risk:</strong> $${opsAmt}K</div>
//        <div><strong>Client Risk:</strong> $${clientAmt}K</div>
//      </div>`;
// }







// function calculateEV() {
//   const ebitda = parseFloat(document.getElementById("ebitda").value) * 1_000_000;
//   let disruption = parseFloat(document.getElementById("baseline").value) / 100;

//   // Prepare explanation text
//   let explanation = `Baseline risk: ${document.getElementById("baseline").value}%`;

//   if(document.getElementById("opsRisk").checked) {
//     disruption += 0.07;
//     explanation += "; Ops: single-site/manual-heavy → +7%";
//   }
//   if(document.getElementById("clientRisk").checked) {
//     disruption += 0.10;
//     explanation += "; Client concentration → +10%";
//   }
//   if(document.getElementById("keyRisk").checked) {
//     disruption += 0.10;
//     explanation += "; Key personnel: single exec critical → +10%";
//   }

//   document.getElementById("explanation").innerText = explanation;

//   // EV calculation
//   const baseMultiple = 6;
//   const riskMultiple = 5;

//   const normalizedEBITDA = ebitda * (1 - disruption);
//   const evBase = ebitda * baseMultiple;
//   const evRisk = normalizedEBITDA * riskMultiple;
//   const evAtRisk = evBase - evRisk;

//   // Risk breakdown bars (approx % of disruption)
//   const keyRisk = 0.12 * disruption * evBase;
//   const operationalRisk = 0.06 * disruption * evBase;
//   const clientRisk = 0.02 * disruption * evBase;

//   document.getElementById("output").innerHTML =
//     `<div>Enterprise Value at Risk: $${evAtRisk.toLocaleString()}</div>
//      <div style="margin-top:10px;">
//        <div class="risk-bar" style="width:${(keyRisk/evAtRisk)*100}%; background:#336633;">Key Personnel: $${Math.round(keyRisk/1000)}K</div>
//        <div class="risk-bar" style="width:${(operationalRisk/evAtRisk)*100}%; background:#66CC66;">Operational: $${Math.round(operationalRisk/1000)}K</div>
//        <div class="risk-bar" style="width:${(clientRisk/evAtRisk)*100}%; background:#CCAA33;">Client: $${Math.round(clientRisk/1000)}K</div>
//      </div>`;
// }




//Old

// function calculateEV() {
//   const ebitda = parseFloat(document.getElementById("ebitda").value);
//   const disruption = parseFloat(document.getElementById("disruption").value) / 100;

//   const baseMultiple = 6;
//   const riskMultiple = 5;

//   const normalizedEBITDA = ebitda * (1 - disruption);
//   const evBase = ebitda * baseMultiple;
//   const evRisk = normalizedEBITDA * riskMultiple;

//   const evAtRisk = evBase - evRisk;

//   document.getElementById("output").innerText =
//     "Enterprise Value at Risk: $" + evAtRisk.toLocaleString();
// }


// function calculateEV() {
//   // Read inputs
//   let ebitda = parseFloat(document.getElementById("ebitda").value) * 1_000_000;
//   let disruption = parseFloat(document.getElementById("baseline").value) / 100;

//   // Apply risk flags
//   let explanation = `Baseline risk: ${document.getElementById("baseline").value}%`;
//   if(document.getElementById("opsRisk").checked) {
//     disruption += 0.07;
//     explanation += "; Ops: single-site/manual-heavy → +7%";
//   }
//   if(document.getElementById("clientRisk").checked) {
//     disruption += 0.10;
//     explanation += "; Client concentration → +10%";
//   }
//   if(document.getElementById("keyRisk").checked) {
//     disruption += 0.10;
//     explanation += "; Key personnel: single exec critical → +10%";
//   }

//   document.getElementById("explanation").innerText = explanation;

//   // EV calculation
//   const baseMultiple = 6;
//   const riskMultiple = 5;

//   const normalizedEBITDA = ebitda * (1 - disruption);
//   const evBase = ebitda * baseMultiple;
//   const evRisk = normalizedEBITDA * riskMultiple;
//   const evAtRisk = evBase - evRisk;

//   // Break down risk visually (approximate percentages of disruption)
//   const keyRisk = 0.12 * disruption * evBase;
//   const operationalRisk = 0.06 * disruption * evBase;
//   const clientRisk = 0.02 * disruption * evBase;

//   // Display EV and risk bars
//   document.getElementById("output").innerHTML =
//     `<div>Enterprise Value at Risk: $${evAtRisk.toLocaleString()}</div>
//      <div style="margin-top:10px;">
//        <div class="risk-bar" style="width:${(keyRisk/evAtRisk)*100}%; background:#003366;">Key Personnel: $${Math.round(keyRisk/1000)}K</div>
//        <div class="risk-bar" style="width:${(operationalRisk/evAtRisk)*100}%; background:#0066CC;">Operational: $${Math.round(operationalRisk/1000)}K</div>
//        <div class="risk-bar" style="width:${(clientRisk/evAtRisk)*100}%; background:#3399FF;">Client: $${Math.round(clientRisk/1000)}K</div>
//      </div>`;
// }
