//Посетитель — это поведенческий паттерн проектирования,
//который позволяет добавлять в программу новые операции, не изменяя 
//классы объектов, над которыми эти операции могут выполняться.

//@ts-ignore
interface CarMEthods {
    accept(visitor: Function): void
    info(): string
    export?(): void
}

abstract class CarVisitor implements CarMEthods{
    abstract info(): string;
    public accept(visitor: Function):void {
        visitor(this)
    } 
}

//@ts-ignore
class Tesla extends CarVisitor  {
    public info(): string {
        return "It is a Tesla car!"
    }
}

class Bmw extends CarVisitor {
    public info(): string {
        return "It is a BMW car!"
    }
}

class Lada extends CarVisitor {
    public info(): string {
        return "It is a Lada car!"
    }
}

function exportVisitor(auto: CarMEthods) {
    if(auto instanceof Tesla) {
        auto.export = () => console.log(`Exported data: ${auto.info()}`)
    }
    if(auto instanceof Bmw) {
        auto.export = () => console.log(`Exported data: ${auto.info()}`)
    }
    if(auto instanceof Lada) {
        auto.export = () => console.log(`Exported data: ${auto.info()}`)
    }
}

