//Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную структуру, 
// а затем работать с ней так, как будто это единичный объект.
//Компоновщик давно стал синонимом всех задач, связанных с построением дерева объектов. Все операции компоновщика основаны на рекурсии 
// и «суммировании» результатов на ветвях дерева.

class Equipment {
    public price!: number;
    public name!: string;
    public equipments!: Equipment[];

    public getPrice(): number {
        return this.price || 0;
    }

    public getName(): string {
        return this.name;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public setName(name: string): void {
        this.name = name;
    }
}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(3000);
    }
}

class Body extends Equipment {
    constructor() {
        super();
        this.setName('Body');
        this.setPrice(1000);
    }
}

class Tools extends Equipment {
    constructor() {
        super();
        this.setName('Tools');
        this.setPrice(500);
    } 
}

//компоновщик
//помимо массива компоновщик может работать с бинарными деревьями и другими структурами данных

class Composite extends Equipment {
    constructor() {
        super()
        this.equipments = [];
    }

    public add(equipment: Equipment) {
        this.equipments.push(equipment)
    }

    public getPrice(): number {
        return this.equipments.map(equipment => equipment.getPrice()).reduce((a, b) => a + b)
    }
}

//----------------------------------------------------------------------------------------------
//@ts-ignore
class Car extends Composite {
    constructor() {
        super();
        this.setName("Audi");
    }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(myCar.getPrice())



