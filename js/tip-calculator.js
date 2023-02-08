// Assign initial values
const billTotal = 40;
const tipRate = .18;
const tipPercentage = tipRate * 100 + '%';


// Calculate tip
const tipAmount = billTotal * tipRate; 
const paymentTotal = billTotal + tipAmount;

// Output 
console.log(tipPercentage);
console.log(tipAmount);
console.log(paymentTotal);
console.log('$${paymentTotal} = $${billTotal} + $${tipAmount}.')



