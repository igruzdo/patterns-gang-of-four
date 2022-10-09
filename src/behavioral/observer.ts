//Наблюдатель — это поведенческий паттерн проектирования, который создаёт механизм подписки, позволяющий 
//одним объектам следить и реагировать на события, происходящие в других объектах.

class AutoNews {
    public news!: string;
    public actions!: Observer[]

    constructor() {
        this.news = ''
        this.actions = []
    }

    public setNews(text: string): void {
        this.news = text
        this.notifyAll();
    }

    public notifyAll(): void {
        return this.actions.forEach(subs => subs.inform(this.news))
    }

    public register(observer: Observer): void {
        this.actions.push(observer)
    }

    public unregister(observer: Observer) {
        this.actions = this.actions.filter(el => el === observer)
    }
}

abstract class Observer {
    public name!: string
    constructor(name: string) {
        this.name = name
    }
    public abstract inform(msg: string): void
}

class Jack extends Observer {
    constructor() {
        super('Jack')
    }
    public inform(msg: string): void {
        console.log(`${this.name}  informed: ${msg}`)
    }
}

class Max extends Observer {
    constructor() {
        super('Max')
    }
    public inform(msg: string): void {
        console.log(`${this.name} informed: ${msg}`)
    }
}

const autoNews = new AutoNews()

const newJack = new Jack()
const newMax = new Max()

autoNews.register(newJack)
autoNews.register(newMax)

autoNews.setNews('Hey everyone!')