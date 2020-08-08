// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const inOne = new Invoice('mario', 'work on the mario website', 250);
const inTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(inOne);
invoices.push(inTwo);

inOne.client = 'yoshi';
inTwo.amount = 400;

console.log(inOne, inTwo);

console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
});
