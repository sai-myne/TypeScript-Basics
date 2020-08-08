import Invoice from './classes/invoices.js';
import Payment from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 2500);
// docTwo = new Payment('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const inOne = new Invoice('mario', 'work on the mario website', 250);
// const inTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(inOne);
// invoices.push(inTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
