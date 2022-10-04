//Итератор — это поведенческий паттерн проектирования, который даёт возможность последовательно обходить элементы составных объектов, не раскрывая их внутреннего представления.
//мы не изменяем внутренности итерируемой сущности
//Идея паттерна Итератор состоит в том, чтобы вынести поведение обхода коллекции из самой коллекции в отдельный класс.

class IteratorCustom {
    public index!: number;
    public elements!: string[];

    constructor(elements: string[]) {
        this.index = 0;
        this.elements = elements
    }

    public next(): string {
        return this.elements[this.index++];
    }

    public hasNext(): boolean {
        return this.index < this.elements.length
    }
}

const collection = new IteratorCustom(['asdas', 'aaaaa', 'dfvdfv'])

while(collection.hasNext()) {
    console.log(collection.next())
}