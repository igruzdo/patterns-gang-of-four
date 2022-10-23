//Декоратор — это структурный паттерн проектирования, который позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки».
//Мы оборачиваем функционал оберткой, которая добавляет что-то новое к нему, но с тем же интерфейсом обернутого функционала

//базовый класс
//@ts-ignore
class CarD {
    public price: number;
    public model: string;

    constructor() {
        this.price = 10000;
        this.model = 'Car'
    }

    public getPrice(): number {
        return this.price
    }

    public getDescr(): string {
        return this.model
    }
}
//@ts-ignore
class Tesla extends CarD {

    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

//___________создаем два декоратора_______________

class Autopilot {

    private car: CarD;

    constructor(car: CarD) {
        this.car = car
    }

    public getPrice(): number {
        return this.car.getPrice() + 5000;
    }

    public getDescr(): string {
        return `${this.car.getDescr()} with autopilot`
    }
}

class Parctrinic {

    private car: CarD;

    constructor(car: CarD) {
        this.car = car
    }

    public getPrice(): number {
        return this.car.getPrice() + 3000;
    }

    public getDescr(): string {
        return `${this.car.getDescr()} with parctronic`
    }
}

let tesla = new Tesla();
//@ts-ignore
let teslaWithAutopilot = new Autopilot(tesla)