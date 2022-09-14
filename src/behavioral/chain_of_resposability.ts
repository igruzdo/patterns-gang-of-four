//Цепочка обязанностей — это поведенческий паттерн проектирования, который позволяет передавать запросы последовательно по цепочке обработчиков. 
//Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.
//Запрос должен передаваться по цепочке без его модификации


class Account {
    public name!:string
    public incomer!:Account;
    public balance!: number;

    public pay(orderPrice: number): void {
        if(this.canPay(orderPrice)) {
            console.log(`Payd ${orderPrice} using ${this.name}`)
        } else if(this.incomer) {
            console.log(`Cannot pay using ${this.name}`)
            this.incomer.pay(orderPrice)
        } else {
            console.log('Not enought money')
        }
    }

    public canPay(amount: number): boolean {
        return this.balance >= amount
    }

    public setNext(account: Account): void {
        this.incomer = account
    }
}

class Master extends Account {
    public name: string;
    public balance: number;

    constructor(balance: number) {
        super();
        this.name = "Master Card"
        this.balance = balance
    }
}

class Qiwi extends Account {
    public name: string;
    public balance: number;

    constructor(balance: number) {
        super();
        this.name = "Qiwi"
        this.balance = balance
    }
}

class Paypal extends Account {
    public name: string;
    public balance: number;

    constructor(balance: number) {
        super();
        this.name = "Paypal"
        this.balance = balance
    }
}



//________реализация

const master = new Master(100);
const payPal = new Paypal(300);
const qiwi = new Qiwi(500);

master.setNext(payPal)
payPal.setNext(qiwi)
master.pay(438);


