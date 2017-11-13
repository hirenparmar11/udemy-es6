export class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  hello() {
    console.log(`Hello! I am ${this.name} from Animal Kingdom`);
  }
}

export class Lion extends Animal {
  constructor(name, height, color, kingdom) {
    super(name, height);
    this.color = color;
    this.kingdom = kingdom;
  }

  hello() {
    console.log(`Hello! I am ${this.name} from ${this.kingdom}`);
  }
}
