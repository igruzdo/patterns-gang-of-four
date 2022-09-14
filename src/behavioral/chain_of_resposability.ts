//Цепочка обязанностей — это поведенческий паттерн проектирования, который позволяет передавать запросы последовательно по цепочке обработчиков. 
//Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.
//Запрос должен передаваться по цепочке без его модификации

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

