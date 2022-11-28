const factor = 14.823;  // IDR
const factor1 = 0.0006; // EUR
const factor2 = 77.9515; // INR
const factor3 = 0.0128;  // USD

const usd = document.getElementById("usd");
const idr = document.getElementById("idr");
const inr = document.getElementById("inr");
const eur = document.getElementById("eur");


usd.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueIDR = value * factor;
    idr.value = valueIDR;
});
usd.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueEUR = value * factor1;
    eur.value = valueEUR;
});
usd.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueINR = value * factor2;
    inr.value = valueINR;
});
idr.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueUSD = value / factor;
    usd.value = valueUSD;
});
idr.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueEUR = value / factor1;
    eur.value = valueEUR;
});
eur.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueINR = value / factor2;
    inr.value = valueINR;
});
eur.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueIDR = value * factor1;
    idr.value = valueIDR;
});
eur.addEventListener("input", function(ev) {
    const value = ev.currentTarget.value;
    const valueUSD = value * factor3;
    usd.value = valueUSD;
});
