"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var inOne = new Invoice('mario', 'work on the mario website', 250);
var inTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
inOne.client = 'yoshi';
inTwo.amount = 400;
console.log(inOne, inTwo);
console.log(invoices);
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
