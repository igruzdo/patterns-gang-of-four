//Посредник — это поведенческий паттерн проектирования, который позволяет уменьшить связанность множества классов между собой, благодаря перемещению этих связей в один класс-посредник.

class OfficialDiller {
    public customers!: string[]

    constructor() {
        this.customers = []
    }

    public orderAuto(customer: Customer, auto: string, info: string): void {
        const name = customer.getName();

        console.log(`Order name: ${name}. Order auto is ${auto}`)
        console.log(`Additional info^ ${info}`)
        this.addToCustomersList(name)
    }

    public addToCustomersList(name: string): void {
        this.customers.push(name)
    }

    public getCustomersList(): string[] {
        return this.customers
    }
}

class Customer {
    public name!: string
    public dealerMediator!: OfficialDiller

    constructor(name: string, dealerMediator: OfficialDiller) {
        this.name = name;
        this.dealerMediator = dealerMediator
    }

    public getName(): string {
        return this.name
    }

    public makeOrder(auto: string, info:string): void {
        this.dealerMediator.orderAuto(this, auto, info)
    }
}

const mediator = new OfficialDiller();

const yauhen = new Customer('Yauhen', mediator)
const valera = new Customer('Valera', mediator)

yauhen.makeOrder('BMW', 'Autopilot')
valera.makeOrder('Audi', 'Parctronic')

console.log(mediator.getCustomersList())