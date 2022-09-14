//Мост — это структурный паттерн, который разделяет бизнес-логику или большой класс на несколько отдельных иерархий, которые потом можно развивать отдельно друг от друга.


class Model {
  public color: Color;

  constructor(color: Color) {
    this.color = color
  }
}

class Color {
  private type: string;

  constructor(type: string) {
    this.type = type
  }

  public get(): string {
    return this.type
  }
}

// создаем два подкласса цветов

class BlackColor extends Color {
  constructor() {
    super('black')
  }
}

class SilverColor extends Color {
  constructor() {
    super('silver')
  }
}

//создем подклассы машин

class BMW extends Model {
  constructor(color: Color) {
    super(color)
  }
  //делегируем покраску методу get класса Color
  paint() {
    return `Auto: BMW, color: ${this.color.get()}`
  }
}

class Audi extends Model {
  constructor(color: Color) {
    super(color)
  }
  //делегируем покраску методу get класса Color
  paint() {
    return `Auto: Audi, color: ${this.color.get()}`
  }
}

const blackBMW = new BMW(new BlackColor())