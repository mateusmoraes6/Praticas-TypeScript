interface Iperson {
    id: number;
    satMyName(): string;
}

class Person implements Iperson {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id,
        this.name = name;
        this.age = age;
    }

    satMyName(): string {
        return this.name;
    }
}

// Mesma funcionalidade que acima
class PersonRefect {
    constructor(
        readonly id: number,
        protected name: string,
        private age: number,
    ) {}
}

class Employee extends Person {
    constructor(id: number, name: string, age: number) {
        super(id, name, age)
    }

    whoAmI() {
        return this.name
    }
}

const mateus = new Person(1, "Mateus", 22);
mateus.name;
