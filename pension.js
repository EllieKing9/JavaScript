let pay = 300000;
let totFirst = pay * 12 * 10 * 1.06;
let totSecond = pay * 12 * 10 * 1.05;
let totAfer = (totFirst + totSecond) * 0.05 * 5;


console.log(totFirst);
console.log(totSecond);
console.log(totFirst + totSecond);
console.log(totAfer);

console.log(totFirst + totSecond + totAfer);
console.log((totFirst + totSecond + totAfer)*0.055/12)
