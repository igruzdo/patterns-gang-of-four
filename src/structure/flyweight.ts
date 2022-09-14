//Легковес — это структурный паттерн проектирования, который позволяет вместить бóльшее количество объектов в отведённую оперативную память. Легковес экономит память, разделяя общее состояние объектов между собой, вместо хранения одинаковых данных в каждом объекте.

//создадим класс легковеса
class AutoL {
    public model: string
    constructor(model:string) {
        this.model = model
    }
}

//создадим фабрику моделей. Таким образом мы экономим память занимаемой объектами

class AutoFactory {
    public models: {[key:string]: any};

    constructor() {
        this.models = {}
    }

    public create(name: string): string {
        let model = this.models[name]
        if(model) return model
        this.models[name] = new AutoL(name)
        return this.models[name]
    }
}