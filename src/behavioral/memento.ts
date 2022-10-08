//Снимок — это поведенческий паттерн проектирования, который позволяет сохранять и восстанавливать прошлые состояния объектов, не раскрывая подробностей их реализации.
class Memento {
    public value!: string

    constructor(value: string) {
        this.value = value
    }
}

const creator = {
    save: (val: string) => new Memento(val),
    restore: (memento: Memento) => memento.value
}

//создадим класс который хранит всю историю снимков

class Caretaker {
    public values!: Memento[]

    constructor() {
        this.values = []
    }

    public addMemento(memento: Memento): void {
        this.values.push(memento)
    }

    public getMemento(indx: number): Memento {
        return this.values[indx]
    }
}

const careTaker = new Caretaker();

careTaker.addMemento(creator.save('hello'));
careTaker.addMemento(creator.save('hello world'));
careTaker.addMemento(creator.save('hello world !!!'));

console.log(creator.restore(careTaker.getMemento(1)))