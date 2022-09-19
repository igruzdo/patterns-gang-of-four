//Команда — это поведенческий паттерн проектирования, который превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов, 
//ставить запросы в очередь, логировать их, а также поддерживать отмену операций.

//Команда - это прослойка между интерфейсом и бизнес логикой, промежуточный слой. Данный паттерн очень похож на паттерн посредника(заместителя)

class OnStartCommand {
    public engine!: EngineC;

    constructor(engine: EngineC) {
        this.engine = engine
    }

    public execute(): void {
        this.engine.on()
    }
}

class OnSwitchOffCommand {
    public engine!: EngineC;

    constructor(engine: EngineC) {
        this.engine = engine
    }

    public execute(): void {
        this.engine.of()
    }
}

class Driver {
    public command!: OnStartCommand | OnSwitchOffCommand;

    constructor(command: OnStartCommand | OnSwitchOffCommand) {
        this.command = command
    }

    public execute(): void {
        this.command.execute()
    }
}

class EngineC {
    public state!: boolean;

    constructor() {
        this.state = false
    }

    public on(): void {
        this.state = true
    }

    public of(): void {
        this.state = false
    }
}

