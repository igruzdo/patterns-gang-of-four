//Паттерн «Стратегия» — это шаблон в программировании, при котором происходит объединение нескольких возможных алгоритмов 
//поведения объекта в единый класс. Каждый алгоритм взаимозаменяем и выбирается прямо во время выполнения программы.

function baseStrategy(amount: number): number {
    return amount
}

function premiumStrategy(amount: number): number {
    return amount * 0.85
}

function platinumStrategy(amount: number): number {
    return amount * 0.65
}

class AutoCart {

    public discount!: Function
    public amount!: number

    constructor(discount: Function) {
        this.discount = discount
        this.amount = 0
    }

    public checkout(): number {
        return this.discount(this.amount)
    }

    public setAmount(amount: number) {
        this.amount = amount
    }
}

const baseCustmer = new AutoCart(baseStrategy)
const premiumCustmer = new AutoCart(premiumStrategy)
const platinumCustmer = new AutoCart(platinumStrategy)

baseCustmer.setAmount(5000)
console.log(baseCustmer.checkout())

premiumCustmer.setAmount(5000)
console.log(premiumCustmer.checkout())

platinumCustmer.setAmount(5000)
console.log(platinumCustmer.checkout())
